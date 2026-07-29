import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
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

	const blockProps = useBlockProps.save({
		id: "process",
		className: "process",
	});

	return (
		<section {...blockProps}>
			<div className="wrap process-grid">
				<div className="process-media">
					<img src={imageSrc} alt={imageAlt} />
				</div>
				<div className="process-text">
					<div className="eyebrow">{eyebrow}</div>
					<RichText.Content tagName="h2" value={heading} />

					<div className="steps">
						<div className="step">
							<div className="step-num">01</div>
							<div className="step-body">
								<h4>{step1Title}</h4>
							</div>
						</div>
						<div className="step">
							<div className="step-num">02</div>
							<div className="step-body">
								<h4>{step2Title}</h4>
							</div>
						</div>
						<div className="step">
							<div className="step-num">03</div>
							<div className="step-body">
								<h4>{step3Title}</h4>
							</div>
						</div>
						<div className="step">
							<div className="step-num">04</div>
							<div className="step-body">
								<h4>{step4Title}</h4>
							</div>
						</div>
						<div className="step">
							<div className="step-num">05</div>
							<div className="step-body">
								<h4>{step5Title}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
