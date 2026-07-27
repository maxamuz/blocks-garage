import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
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

	const blockProps = useBlockProps.save({
		className: "hero",
	});

	return (
		<section {...blockProps}>
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
						<img src={imageSrc} alt={imageAlt} />
						<div className="hero-badge">
							{badgeMain}
							<span>{badgeSub}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
