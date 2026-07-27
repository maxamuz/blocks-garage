import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		heading,
		headingAccent,
		headingRest,
		lead,
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

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Настройки Hero-блока", "blocks-garage")} initialOpen={true}>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "blocks-garage")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<TextControl
						label={__("Заголовок (начало)", "blocks-garage")}
						value={heading}
						onChange={(val) => setAttributes({ heading: val })}
					/>
					<TextControl
						label={__("Заголовок (акцентное слово)", "blocks-garage")}
						value={headingAccent}
						onChange={(val) => setAttributes({ headingAccent: val })}
					/>
					<TextControl
						label={__("Заголовок (окончание)", "blocks-garage")}
						value={headingRest}
						onChange={(val) => setAttributes({ headingRest: val })}
					/>
					<TextareaControl
						label={__("Подзаголовок (lead)", "blocks-garage")}
						value={lead}
						onChange={(val) => setAttributes({ lead: val })}
					/>
				</PanelBody>

				<PanelBody title={__("Оффер-блок", "blocks-garage")} initialOpen={false}>
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

				<PanelBody title={__("Кнопки CTA", "blocks-garage")} initialOpen={false}>
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

				<PanelBody title={__("Примечание", "blocks-garage")} initialOpen={false}>
					<TextareaControl
						label={__("Текст примечания", "blocks-garage")}
						value={note}
						onChange={(val) => setAttributes({ note: val })}
					/>
				</PanelBody>

				<PanelBody title={__("Изображение и бейдж", "blocks-garage")} initialOpen={false}>
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
												style={{ maxWidth: "100%", height: "auto", display: "block" }}
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

			<section {...blockProps} className="hero">
				<div className="wrap hero-grid">
					<div className="hero-content">
						<div className="eyebrow">{eyebrow}</div>
						<h1>
							{heading} <span className="accent">{headingAccent}</span>{" "}
							{headingRest}
						</h1>
						<p className="hero-lead">{lead}</p>

						<div className="offer-box">
							<div className="price">
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
