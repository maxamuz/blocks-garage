import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
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

	const blockProps = useBlockProps.save({
		className: "forms-block",
	});

	return (
		<section {...blockProps}>
			<section className="intro-forms" style={{ paddingTop: 0 }}>
				<div className="intro-statement wrap">
					<RichText.Content tagName="p" value={statementText} />
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
							<RichText.Content tagName="h3" value={formTitle} />
							<p className="sub">{formSubtitle}</p>
							<div className="cf7-form">{formShortcode}</div>
							<p className="consent">
								<RichText.Content value={consentText} />
							</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
