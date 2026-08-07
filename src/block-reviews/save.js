import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
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

	const blockProps = useBlockProps.save({
		className: "reviews-block",
	});

	return (
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
										{yandexWidgetLinkText || "Открыть в Яндекс Картах"}
									</a>
								) : null}
							</div>
						) : (
							<div>
								<div className="platform">{ratingPlatform}</div>
								<div className="score">
									{ratingScore} <span className="stars">{ratingStars}</span>
								</div>
								<div className="count">{ratingCount}</div>
							</div>
						)}
					</div>
					<div className="card map-card" style={{ padding: 0 }}>
						<div className="map-visual" style={{ height: `${mapHeight}px` }}>
							{mapImageUrl ? <img src={mapImageUrl} alt={mapImageAlt} /> : null}
							<div className="pin">
								<div className="pin-dot"></div>
							</div>
						</div>
						<div className="map-info">
							<span>{mapInfoSpan}</span>
							<a href={mapInfoHref}>{mapInfoText}</a>
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
						{ctaText}
					</a>
				</div>
			</div>
		</section>
	);
}
