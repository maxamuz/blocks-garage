import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		statementText,
		ratingPlatform,
		ratingScore,
		ratingStars,
		ratingCount,
		mapLocationText,
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
								<div>
									<div className="platform">{ratingPlatform}</div>
									<div className="score">
										{ratingScore} <span className="stars">{ratingStars}</span>
									</div>
									<div className="count">{ratingCount}</div>
								</div>
							</div>

							<div
								className="card map-card"
								style={{ flex: 1, minWidth: 240, padding: 0 }}
							>
								<div className="map-visual">
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
