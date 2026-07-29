import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "./editor.scss";

const HEADING_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/text-color",
	"core/link",
];

export default function Edit({ attributes, setAttributes }) {
	const {
		imageSrc,
		imageAlt,
		eyebrow,
		heading,
		step1Title,
		step2Title,
		step3Title,
		step4Title,
		step5Title,
	} = attributes;

	const blockProps = useBlockProps({
		id: "process",
		className: "process",
	});

	return (
		<>
			<BlockControls group="inline" />

			<InspectorControls>
				<PanelBody
					title={__("Настройки блока Process", "blocks-garage")}
					initialOpen={true}
				>
					<TextControl
						label={__("Eyebrow", "blocks-garage")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<p style={{ margin: "16px 0 0", fontSize: "12px", color: "#757575" }}>
						{__(
							"Заголовок и шаги редактируются прямо в блоке.",
							"blocks-garage",
						)}
					</p>
				</PanelBody>

				<PanelBody
					title={__("Изображение", "blocks-garage")}
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
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="wrap process-grid">
					<div className="process-media">
						{imageSrc ? (
							<img src={imageSrc} alt={imageAlt} />
						) : (
							<div
								style={{
									width: "100%",
									height: "260px",
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
					</div>

					<div className="process-text">
						<div className="eyebrow">{eyebrow}</div>
						<RichText
							tagName="h2"
							value={heading}
							onChange={(val) => setAttributes({ heading: val })}
							allowedFormats={HEADING_ALLOWED_FORMATS}
							multiline={false}
							preserveWhiteSpace={true}
						/>

						<div className="steps">
							<div className="step">
								<div className="step-num">01</div>
								<div className="step-body">
									<RichText
										tagName="h4"
										value={step1Title}
										onChange={(val) => setAttributes({ step1Title: val })}
										allowedFormats={[]}
										multiline={false}
										preserveWhiteSpace={true}
									/>
								</div>
							</div>

							<div className="step">
								<div className="step-num">02</div>
								<div className="step-body">
									<RichText
										tagName="h4"
										value={step2Title}
										onChange={(val) => setAttributes({ step2Title: val })}
										allowedFormats={[]}
										multiline={false}
										preserveWhiteSpace={true}
									/>
								</div>
							</div>

							<div className="step">
								<div className="step-num">03</div>
								<div className="step-body">
									<RichText
										tagName="h4"
										value={step3Title}
										onChange={(val) => setAttributes({ step3Title: val })}
										allowedFormats={[]}
										multiline={false}
										preserveWhiteSpace={true}
									/>
								</div>
							</div>

							<div className="step">
								<div className="step-num">04</div>
								<div className="step-body">
									<RichText
										tagName="h4"
										value={step4Title}
										onChange={(val) => setAttributes({ step4Title: val })}
										allowedFormats={[]}
										multiline={false}
										preserveWhiteSpace={true}
									/>
								</div>
							</div>

							<div className="step">
								<div className="step-num">05</div>
								<div className="step-body">
									<RichText
										tagName="h4"
										value={step5Title}
										onChange={(val) => setAttributes({ step5Title: val })}
										allowedFormats={[]}
										multiline={false}
										preserveWhiteSpace={true}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
