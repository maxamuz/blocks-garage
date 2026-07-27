import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
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

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		heading,
		lead,
		oldPrice,
		priceValue,
		priceSubtext,
		offerTitle,
		offerText,
		cta1Text,
		cta1Href,
		cta2Text,
		cta2Href,
		note,
		imageSrc,
		imageAlt,
		badgeMain,
		badgeSub,
	} = attributes;

	const blockProps = useBlockProps({
		className: "hero",
	});

	return (
		<>
			<BlockControls group="inline" />

			<InspectorControls>
				<PanelBody
					title={__("Настройки Hero-блока", "blocks-garage")}
					initialOpen={true}
				>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "blocks-garage")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<TextareaControl
						label={__("Подзаголовок (lead)", "blocks-garage")}
						value={lead}
						onChange={(val) => setAttributes({ lead: val })}
					/>
					<p
						style={{ margin: "16px 0 8px", fontSize: "12px", color: "#757575" }}
					>
						{__(
							"Заголовок H1 редактируется прямо в блоке. Выделите текст и используйте тулбар, чтобы выбрать цвет или применить форматирование.",
							"blocks-garage",
						)}
					</p>
				</PanelBody>

				<PanelBody
					title={__("Оффер-блок", "blocks-garage")}
					initialOpen={false}
				>
					<TextControl
						label={__("Старая цена (зачёркнутая)", "blocks-garage")}
						value={oldPrice}
						onChange={(val) => setAttributes({ oldPrice: val })}
					/>
					<TextControl
						label={__("Значение цены", "blocks-garage")}
						value={priceValue}
						onChange={(val) => setAttributes({ priceValue: val })}
					/>
					<TextControl
						label={__("Подпись под ценой", "blocks-garage")}
						value={priceSubtext}
						onChange={(val) => setAttributes({ priceSubtext: val })}
					/>
					<TextControl
						label={__("Жирное начало текста", "blocks-garage")}
						value={offerTitle}
						onChange={(val) => setAttributes({ offerTitle: val })}
					/>
					<TextareaControl
						label={__("Остальной текст оффера", "blocks-garage")}
						value={offerText}
						onChange={(val) => setAttributes({ offerText: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Кнопки CTA", "blocks-garage")}
					initialOpen={false}
				>
					<TextControl
						label={__("Текст кнопки 1", "blocks-garage")}
						value={cta1Text}
						onChange={(val) => setAttributes({ cta1Text: val })}
					/>
					<TextControl
						label={__("Ссылка кнопки 1", "blocks-garage")}
						value={cta1Href}
						onChange={(val) => setAttributes({ cta1Href: val })}
					/>
					<TextControl
						label={__("Текст кнопки 2", "blocks-garage")}
						value={cta2Text}
						onChange={(val) => setAttributes({ cta2Text: val })}
					/>
					<TextControl
						label={__("Ссылка кнопки 2", "blocks-garage")}
						value={cta2Href}
						onChange={(val) => setAttributes({ cta2Href: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Примечание", "blocks-garage")}
					initialOpen={false}
				>
					<TextareaControl
						label={__("Текст примечания", "blocks-garage")}
						value={note}
						onChange={(val) => setAttributes({ note: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Изображение и бейдж", "blocks-garage")}
					initialOpen={false}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									imageSrc: media.url,
									imageAlt: media.alt || imageAlt,
								});
							}}
							allowedTypes={["image"]}
							value={imageSrc}
							render={({ open }) => (
								<div>
									{imageSrc ? (
										<div style={{ marginBottom: "8px" }}>
											<img
												src={imageSrc}
												alt={imageAlt}
												style={{
													maxWidth: "100%",
													height: "auto",
													display: "block",
												}}
											/>
										</div>
									) : null}
									<Button variant="secondary" onClick={open}>
										{imageSrc
											? __("Заменить изображение", "blocks-garage")
											: __("Выбрать изображение", "blocks-garage")}
									</Button>
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__("Alt-текст изображения", "blocks-garage")}
						value={imageAlt}
						onChange={(val) => setAttributes({ imageAlt: val })}
					/>
					<TextControl
						label={__("Бейдж (основной текст)", "blocks-garage")}
						value={badgeMain}
						onChange={(val) => setAttributes({ badgeMain: val })}
					/>
					<TextControl
						label={__("Бейдж (подзаголовок)", "blocks-garage")}
						value={badgeSub}
						onChange={(val) => setAttributes({ badgeSub: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="wrap hero-grid">
					<div className="hero-content">
						<div className="eyebrow">{eyebrow}</div>
						<RichText
							tagName="h1"
							value={heading}
							onChange={(val) => setAttributes({ heading: val })}
							placeholder={__("Введите заголовок H1…", "blocks-garage")}
							allowedFormats={HEADING_ALLOWED_FORMATS}
							multiline={false}
							preserveWhiteSpace={true}
						/>
						<p className="hero-lead">{lead}</p>

						<div className="offer-box">
							<div className="price">
								{oldPrice && <span className="old-price">{oldPrice}</span>}
								{priceValue}
								<sub>{priceSubtext}</sub>
							</div>
							<p>
								<b>{offerTitle}</b> {offerText}
							</p>
						</div>

						<div className="hero-cta">
							<a href={cta1Href} className="btn">
								{cta1Text}
							</a>
							<a href={cta2Href} className="btn btn-outline">
								{cta2Text}
							</a>
						</div>
						<p className="hero-note">{note}</p>
					</div>

					<div className="hero-media-col">
						<div className="hero-media">
							{imageSrc ? (
								<img src={imageSrc} alt={imageAlt} />
							) : (
								<div
									style={{
										width: "100%",
										height: "300px",
										background: "#e0e0e0",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#666",
										textAlign: "center",
										padding: "20px",
									}}
								>
									{__("Выберите изображение в настройках", "blocks-garage")}
								</div>
							)}
							<div className="hero-badge">
								{badgeMain}
								<span>{badgeSub}</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
