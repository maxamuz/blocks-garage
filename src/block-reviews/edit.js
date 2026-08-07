import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "./editor.scss";

const TEXT_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/text-color",
	"core/link",
];

export default function Edit({ attributes, setAttributes }) {
	const {
		yandexWidgetIframeSrc,
		yandexWidgetLinkHref,
		yandexWidgetLinkText,
		yandexWidgetHeight,
		ratingPlatform,
		ratingScore,
		ratingStars,
		ratingCount,
		mapHeight,
		mapImageUrl,
		mapImageAlt,
		mapInfoSpan,
		mapInfoHref,
		mapInfoText,
		ctaHref,
		ctaText,
	} = attributes;

	const blockProps = useBlockProps({
		className: "reviews-block",
	});

	return (
		<>
			<BlockControls group="inline" />

			<InspectorControls>
				<PanelBody
					title={__("Виджет рейтинга Яндекс", "blocks-garage")}
					initialOpen={true}
				>
					<TextControl
						label={__("Iframe src (Яндекс виджет)", "blocks-garage")}
						help={__(
							"Например: https://yandex.ru/maps-reviews-widget/122365042928?comments",
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
							setAttributes({
								yandexWidgetHeight: Number(val || 0),
							})
						}
					/>
					<div
						style={{
							margin: "12px 0",
							height: "1px",
							background: "#eee",
						}}
					/>
					<p style={{ margin: "0 0 8px", fontSize: "12px", color: "#757575" }}>
						{__(
							"Если поле iframe выше пустое — показывается текстовый рейтинг ниже.",
							"blocks-garage",
						)}
					</p>
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

				<PanelBody title={__("Карта", "blocks-garage")} initialOpen={false}>
					<TextControl
						label={__("Высота map-visual (px)", "blocks-garage")}
						type="number"
						value={mapHeight}
						onChange={(val) => setAttributes({ mapHeight: Number(val || 120) })}
					/>
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
									<div
										style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
									>
										<Button variant="secondary" onClick={open}>
											{mapImageUrl
												? __("Заменить изображение карты", "blocks-garage")
												: __("Выбрать изображение карты", "blocks-garage")}
										</Button>
										{mapImageUrl ? (
											<Button
												variant="secondary"
												onClick={() =>
													setAttributes({
														mapImageUrl: "",
														mapImageAlt: "Карта",
													})
												}
											>
												{__("Удалить", "blocks-garage")}
											</Button>
										) : null}
									</div>
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__("Alt изображения", "blocks-garage")}
						value={mapImageAlt}
						onChange={(val) => setAttributes({ mapImageAlt: val })}
					/>
					<TextControl
						label={__("Текст локации (span)", "blocks-garage")}
						value={mapInfoSpan}
						onChange={(val) => setAttributes({ mapInfoSpan: val })}
					/>
					<TextControl
						label={__("Ссылка карты (href)", "blocks-garage")}
						value={mapInfoHref}
						onChange={(val) => setAttributes({ mapInfoHref: val })}
					/>
					<TextControl
						label={__("Текст ссылки карты", "blocks-garage")}
						value={mapInfoText}
						onChange={(val) => setAttributes({ mapInfoText: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("CTA-ссылка", "blocks-garage")}
					initialOpen={false}
				>
					<TextControl
						label={__("Ссылка (href)", "blocks-garage")}
						value={ctaHref}
						onChange={(val) => setAttributes({ ctaHref: val })}
					/>
					<TextControl
						label={__("Текст кнопки", "blocks-garage")}
						value={ctaText}
						onChange={(val) => setAttributes({ ctaText: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="wrap">
					<div className="cta-strip">
						<div className="card rating-card">
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
											className="yandex-widget-link"
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
									<div className="platform">
										<RichText
											tagName="span"
											value={ratingPlatform}
											onChange={(val) =>
												setAttributes({
													ratingPlatform: val,
												})
											}
											allowedFormats={[]}
											multiline={false}
											preserveWhiteSpace={true}
										/>
									</div>
									<div className="score">
										<RichText
											tagName="span"
											value={ratingScore}
											onChange={(val) =>
												setAttributes({
													ratingScore: val,
												})
											}
											allowedFormats={[]}
											multiline={false}
											preserveWhiteSpace={true}
										/>{" "}
										<span className="stars">
											<RichText
												tagName="span"
												value={ratingStars}
												onChange={(val) =>
													setAttributes({
														ratingStars: val,
													})
												}
												allowedFormats={[]}
												multiline={false}
												preserveWhiteSpace={true}
											/>
										</span>
									</div>
									<div className="count">
										<RichText
											tagName="span"
											value={ratingCount}
											onChange={(val) =>
												setAttributes({
													ratingCount: val,
												})
											}
											allowedFormats={TEXT_ALLOWED_FORMATS}
											multiline={false}
											preserveWhiteSpace={true}
										/>
									</div>
								</div>
							)}
						</div>
						<div className="card map-card" style={{ padding: 0 }}>
							<div className="map-visual" style={{ height: `${mapHeight}px` }}>
								{mapImageUrl ? (
									<img src={mapImageUrl} alt={mapImageAlt} />
								) : null}
								<div className="pin">
									<div className="pin-dot"></div>
								</div>
							</div>
							<div className="map-info">
								<span>
									<RichText
										tagName="span"
										value={mapInfoSpan}
										onChange={(val) => setAttributes({ mapInfoSpan: val })}
										allowedFormats={[]}
										multiline={false}
										preserveWhiteSpace={true}
									/>
								</span>
								<a href={mapInfoHref}>
									<RichText
										tagName="span"
										value={mapInfoText}
										onChange={(val) => setAttributes({ mapInfoText: val })}
										allowedFormats={[]}
										multiline={false}
										preserveWhiteSpace={true}
									/>
								</a>
							</div>
						</div>
						<a
							href={ctaHref}
							className="card cta-card"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
								fontFamily: '"Oswald", sans-serif',
								textTransform: "uppercase",
								fontWeight: 700,
								color: "var(--yellow)",
								borderColor: "var(--yellow)",
								transition: "0.2s",
							}}
						>
							<RichText
								tagName="span"
								value={ctaText}
								onChange={(val) => setAttributes({ ctaText: val })}
								allowedFormats={TEXT_ALLOWED_FORMATS}
								multiline={false}
								preserveWhiteSpace={true}
							/>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
