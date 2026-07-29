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

const STATEMENT_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/link",
	"core/text-color",
];

const CONSENT_ALLOWED_FORMATS = ["core/bold", "core/italic", "core/link"];

export default function Edit({ attributes, setAttributes }) {
	const {
		statementText,
		ratingPlatform,
		ratingScore,
		ratingStars,
		ratingCount,
		yandexWidgetIframeSrc,
		yandexWidgetLinkHref,
		yandexWidgetLinkText,
		yandexWidgetHeight,
		mapLocationText,
		mapImageUrl,
		mapImageAlt,
		mapLinkText,
		mapLinkHref,
		discountBadge,
		formTitle,
		formSubtitle,
		formShortcode,
		consentText,
	} = attributes;

	const blockProps = useBlockProps({
		className: "forms-block",
	});

	return (
		<>
			<BlockControls group="inline" />

			<InspectorControls>
				<PanelBody
					title={__("Вступительный текст", "blocks-garage")}
					initialOpen={false}
				>
					<p style={{ margin: "0 0 8px", fontSize: "12px", color: "#757575" }}>
						{__(
							"Текст редактируется прямо в блоке. Выделите слово и сделайте его жирным (кнопка B).",
							"blocks-garage",
						)}
					</p>
				</PanelBody>

				<PanelBody
					title={__("Виджет рейтинга", "blocks-garage")}
					initialOpen={false}
				>
					<TextControl
						label={__("Iframe src (Яндекс виджет)", "blocks-garage")}
						help={__(
							"Например: https://yandex.ru/maps-reviews-widget/.....?comments",
							"blocks-garage",
						)}
						value={yandexWidgetIframeSrc}
						onChange={(val) => setAttributes({ yandexWidgetIframeSrc: val })}
					/>
					<TextControl
						label={__("Ссылка под виджетом", "blocks-garage")}
						help={__(
							"Например: https://yandex.ru/maps/org/.../",
							"blocks-garage",
						)}
						value={yandexWidgetLinkHref}
						onChange={(val) => setAttributes({ yandexWidgetLinkHref: val })}
					/>
					<TextControl
						label={__("Текст ссылки под виджетом", "blocks-garage")}
						value={yandexWidgetLinkText}
						onChange={(val) => setAttributes({ yandexWidgetLinkText: val })}
					/>
					<TextControl
						label={__("Высота виджета (px)", "blocks-garage")}
						type="number"
						value={yandexWidgetHeight}
						onChange={(val) =>
							setAttributes({ yandexWidgetHeight: Number(val || 0) })
						}
					/>
					<div
						style={{ margin: "12px 0", height: "1px", background: "#eee" }}
					/>
					<TextControl
						label={__("Платформа", "blocks-garage")}
						value={ratingPlatform}
						onChange={(val) => setAttributes({ ratingPlatform: val })}
					/>
					<TextControl
						label={__("Оценка (число)", "blocks-garage")}
						value={ratingScore}
						onChange={(val) => setAttributes({ ratingScore: val })}
					/>
					<TextControl
						label={__("Звёзды (символы)", "blocks-garage")}
						value={ratingStars}
						onChange={(val) => setAttributes({ ratingStars: val })}
					/>
					<TextControl
						label={__("Количество оценок", "blocks-garage")}
						value={ratingCount}
						onChange={(val) => setAttributes({ ratingCount: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Виджет карты", "blocks-garage")}
					initialOpen={false}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									mapImageUrl: media.url,
									mapImageAlt: media.alt || mapImageAlt,
								});
							}}
							allowedTypes={["image"]}
							value={mapImageUrl}
							render={({ open }) => (
								<div style={{ marginBottom: "12px" }}>
									{mapImageUrl ? (
										<div style={{ marginBottom: "8px" }}>
											<img
												src={mapImageUrl}
												alt={mapImageAlt}
												style={{
													maxWidth: "100%",
													height: "auto",
													display: "block",
													borderRadius: "4px",
												}}
											/>
										</div>
									) : null}
									<Button variant="secondary" onClick={open}>
										{mapImageUrl
											? __("Заменить изображение карты", "blocks-garage")
											: __("Выбрать изображение карты", "blocks-garage")}
									</Button>
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__("Alt-текст изображения карты", "blocks-garage")}
						value={mapImageAlt}
						onChange={(val) => setAttributes({ mapImageAlt: val })}
					/>
					<TextControl
						label={__("Текст локации", "blocks-garage")}
						value={mapLocationText}
						onChange={(val) => setAttributes({ mapLocationText: val })}
					/>
					<TextControl
						label={__("Текст ссылки", "blocks-garage")}
						value={mapLinkText}
						onChange={(val) => setAttributes({ mapLinkText: val })}
					/>
					<TextControl
						label={__("URL ссылки", "blocks-garage")}
						value={mapLinkHref}
						onChange={(val) => setAttributes({ mapLinkHref: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Форма заявки", "blocks-garage")}
					initialOpen={true}
				>
					<TextControl
						label={__("Бейдж скидки", "blocks-garage")}
						value={discountBadge}
						onChange={(val) => setAttributes({ discountBadge: val })}
					/>
					<TextareaControl
						label={__("Подзаголовок формы", "blocks-garage")}
						value={formSubtitle}
						onChange={(val) => setAttributes({ formSubtitle: val })}
					/>
					<TextareaControl
						label={__("Шорткод Contact Form 7", "blocks-garage")}
						help={__(
							'Вставьте шорткод вида: [contact-form-7 id="123" title="..."]',
							"blocks-garage",
						)}
						value={formShortcode}
						onChange={(val) => setAttributes({ formShortcode: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<section className="intro-forms" style={{ paddingTop: 0 }}>
					<div className="intro-statement wrap">
						<RichText
							tagName="p"
							value={statementText}
							onChange={(val) => setAttributes({ statementText: val })}
							allowedFormats={STATEMENT_ALLOWED_FORMATS}
							preserveWhiteSpace={true}
						/>
					</div>

					<div className="wrap">
						<div className="hero-grid" style={{ alignItems: "stretch" }}>
							<div
								className="side"
								style={{ flexDirection: "row", flexWrap: "wrap" }}
							>
								<div
									className="card rating-card"
									style={{ flex: 1, minWidth: 240 }}
								>
									{yandexWidgetIframeSrc ? (
										<div
											style={{
												width: "100%",
												height: yandexWidgetHeight || 800,
												overflow: "hidden",
												position: "relative",
											}}
										>
											<iframe
												title="Yandex Maps Reviews"
												style={{
													width: "100%",
													height: "100%",
													border: "1px solid #e6e6e6",
													borderRadius: "8px",
													boxSizing: "border-box",
												}}
												src={yandexWidgetIframeSrc}
											/>
											{yandexWidgetLinkHref ? (
												<a
													href={yandexWidgetLinkHref}
													target="_blank"
													rel="noreferrer"
													style={{
														boxSizing: "border-box",
														textDecoration: "none",
														color: "#b3b3b3",
														fontSize: "10px",
														fontFamily: "YS Text, sans-serif",
														position: "absolute",
														bottom: "8px",
														width: "100%",
														textAlign: "center",
														left: 0,
														overflow: "hidden",
														textOverflow: "ellipsis",
														display: "block",
														maxHeight: "14px",
														whiteSpace: "nowrap",
														padding: "0 16px",
													}}
												>
													{yandexWidgetLinkText ||
														__("Открыть в Яндекс Картах", "blocks-garage")}
												</a>
											) : null}
										</div>
									) : (
										<div>
											<div className="platform">{ratingPlatform}</div>
											<div className="score">
												{ratingScore}{" "}
												<span className="stars">{ratingStars}</span>
											</div>
											<div className="count">{ratingCount}</div>
										</div>
									)}
								</div>

								<div
									className="card map-card"
									style={{ flex: 1, minWidth: 240, padding: 0 }}
								>
									<div className="map-visual">
										{mapImageUrl ? (
											<img src={mapImageUrl} alt={mapImageAlt} />
										) : null}
										<div className="pin">
											<div className="pin-dot"></div>
										</div>
									</div>
									<div className="map-info">
										<span>{mapLocationText}</span>
										<a href={mapLinkHref}>{mapLinkText}</a>
									</div>
								</div>
							</div>

							<div className="card form-card" id="lead-mini">
								<span className="discount">{discountBadge}</span>
								<RichText
									tagName="h3"
									value={formTitle}
									onChange={(val) => setAttributes({ formTitle: val })}
									allowedFormats={[]}
								/>
								<p className="sub">{formSubtitle}</p>
								<div
									style={{
										padding: "12px 14px",
										border: "1px dashed #555",
										borderRadius: "4px",
										color: "#c9c9c9",
										background: "#101010",
										fontFamily: "monospace",
										fontSize: "12px",
										whiteSpace: "pre-wrap",
									}}
								>
									{formShortcode || '[contact-form-7 id="123" title="..."]'}
								</div>
								<p className="consent">
									<RichText
										value={consentText}
										onChange={(val) => setAttributes({ consentText: val })}
										allowedFormats={CONSENT_ALLOWED_FORMATS}
										preserveWhiteSpace={true}
									/>
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}
