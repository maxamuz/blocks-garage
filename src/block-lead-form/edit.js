import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	ToggleControl,
} from "@wordpress/components";
import "./editor.scss";

const HEADING_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/text-color",
	"core/link",
	"core/strikethrough",
	"core/superscript",
	"core/subscript",
	"core/highlight",
];

const TEXT_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/link",
	"core/text-color",
];

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		heading,
		leadText,
		points,
		useCF7,
		formShortcode,
		formTitle,
		formNamePlaceholder,
		formTelPlaceholder,
		formButtonText,
		consentText,
		consentLinkText,
		consentLinkHref,
	} = attributes;

	const blockProps = useBlockProps({
		className: "lead-section",
	});

	const updatePoint = (index, value) => {
		const newPoints = [...points];
		newPoints[index] = value;
		setAttributes({ points: newPoints });
	};

	const addPoint = () => {
		setAttributes({ points: [...points, "Новый пункт"] });
	};

	const removePoint = (index) => {
		setAttributes({ points: points.filter((_, i) => i !== index) });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Левая часть (текст)", "blocks-garage")} initialOpen={true}>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "blocks-garage")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<TextareaControl
						label={__("Вступительный текст (параграф)", "blocks-garage")}
						value={leadText}
						onChange={(val) => setAttributes({ leadText: val })}
						rows={3}
					/>

					<p
						style={{
							margin: "18px 0 8px",
							fontSize: "12px",
							color: "#757575",
							fontWeight: "600",
						}}
					>
						{__("Пункты списка lead-points", "blocks-garage")}
					</p>
					<Button
						variant="primary"
						size="small"
						onClick={addPoint}
						style={{ marginBottom: "10px" }}
					>
						{__("+ Добавить пункт", "blocks-garage")}
					</Button>
					{points.map((p, i) => (
						<div
							key={i}
							style={{
								display: "flex",
								gap: "6px",
								marginBottom: "6px",
								alignItems: "center",
							}}
						>
							<TextControl
								value={p}
								onChange={(val) => updatePoint(i, val)}
								style={{ flex: 1 }}
							/>
							<Button
								variant="secondary"
								size="small"
								isDestructive
								onClick={() => removePoint(i)}
								disabled={points.length <= 1}
							>
								✕
							</Button>
						</div>
					))}
				</PanelBody>

				<PanelBody title={__("Форма (правая часть)", "blocks-garage")}>
					<ToggleControl
						label={__("Использовать Contact Form 7 (шорткод)", "blocks-garage")}
						checked={!!useCF7}
						onChange={(val) => setAttributes({ useCF7: val })}
					/>

					{useCF7 ? (
						<TextareaControl
							label={__("Шорткод Contact Form 7", "blocks-garage")}
							value={formShortcode}
							onChange={(val) => setAttributes({ formShortcode: val })}
							rows={2}
							help={__(
								"Например: [contact-form-7 id=\"6155b65\" title=\"Главная форма\"]",
								"blocks-garage",
							)}
						/>
					) : (
						<>
							<TextControl
								label={__("Заголовок формы (h3)", "blocks-garage")}
								value={formTitle}
								onChange={(val) => setAttributes({ formTitle: val })}
							/>
							<TextControl
								label={__("Placeholder имени", "blocks-garage")}
								value={formNamePlaceholder}
								onChange={(val) => setAttributes({ formNamePlaceholder: val })}
							/>
							<TextControl
								label={__("Placeholder телефона", "blocks-garage")}
								value={formTelPlaceholder}
								onChange={(val) => setAttributes({ formTelPlaceholder: val })}
							/>
							<TextControl
								label={__("Текст кнопки", "blocks-garage")}
								value={formButtonText}
								onChange={(val) => setAttributes({ formButtonText: val })}
							/>
						</>
					)}

					<p
						style={{
							margin: "16px 0 8px",
							fontSize: "12px",
							color: "#757575",
							fontWeight: "600",
						}}
					>
						{__("Согласие под формой", "blocks-garage")}
					</p>
					<TextareaControl
						label={__("Текст согласия (до и после ссылки)", "blocks-garage")}
						value={consentText}
						onChange={(val) => setAttributes({ consentText: val })}
						rows={3}
					/>
					<TextControl
						label={__("Текст ссылки", "blocks-garage")}
						value={consentLinkText}
						onChange={(val) => setAttributes({ consentLinkText: val })}
					/>
					<TextControl
						label={__("URL ссылки", "blocks-garage")}
						value={consentLinkHref}
						onChange={(val) => setAttributes({ consentLinkHref: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps} id="lead">
				<div className="wrap lead-grid">
					<div>
						<div className="eyebrow">{eyebrow}</div>
						<RichText
							tagName="h2"
							value={heading}
							onChange={(val) => setAttributes({ heading: val })}
							allowedFormats={HEADING_ALLOWED_FORMATS}
							multiline={false}
							preserveWhiteSpace={true}
						/>
						<RichText
							tagName="p"
							value={leadText}
							onChange={(val) => setAttributes({ leadText: val })}
							allowedFormats={TEXT_ALLOWED_FORMATS}
							multiline={false}
						/>
						<ul className="lead-points">
							{points.map((p, i) => (
								<li key={i}>
									<RichText
										tagName="span"
										value={p}
										onChange={(val) => updatePoint(i, val)}
										allowedFormats={TEXT_ALLOWED_FORMATS}
										multiline={false}
									/>
								</li>
							))}
						</ul>
					</div>

					{useCF7 ? (
						<div className="lead-form cf7-form">
							<RichText
								tagName="h3"
								value={formTitle}
								onChange={(val) => setAttributes({ formTitle: val })}
								allowedFormats={HEADING_ALLOWED_FORMATS}
								multiline={false}
							/>
							<div className="cf7-shortcode-preview">
								{formShortcode ||
									__("[ Введите шорткод CF7 в настройках ]", "blocks-garage")}
							</div>
						</div>
					) : (
						<form className="lead-form" onSubmit="return false;">
							<RichText
								tagName="h3"
								value={formTitle}
								onChange={(val) => setAttributes({ formTitle: val })}
								allowedFormats={HEADING_ALLOWED_FORMATS}
								multiline={false}
							/>
							<input type="text" placeholder={formNamePlaceholder} readOnly />
							<input type="tel" placeholder={formTelPlaceholder} readOnly />
							<button type="submit" className="btn btn-block" disabled>
								{formButtonText}
							</button>
							<p className="consent">
								<RichText
									tagName="span"
									value={consentText}
									onChange={(val) => setAttributes({ consentText: val })}
									allowedFormats={TEXT_ALLOWED_FORMATS}
									multiline={false}
								/>
								{consentLinkText && (
									<a
										href={consentLinkHref || "#"}
										style={{
											color: "var(--muted)",
											textDecoration: "underline",
										}}
									>
										{consentLinkText}
									</a>
								)}
								.
							</p>
						</form>
					)}
				</div>
			</section>
		</>
	);
}
