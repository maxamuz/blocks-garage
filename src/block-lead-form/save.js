import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		eyebrow,
		heading,
		leadText,
		points,
		useCF7,
		formShortcode,
		formTitle,
		formNamePlaceholder,
		formTelPlaceholder,
		formButtonText,
		consentText,
		consentLinkText,
		consentLinkHref,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "lead-section",
	});

	const consentParts = consentText.split(consentLinkText);
	const beforeLink = consentParts[0] || "";
	const afterLink = consentParts.slice(1).join(consentLinkText) || "";

	return (
		<section {...blockProps} id="lead">
			<div className="wrap lead-grid">
				<div>
					<div className="eyebrow">{eyebrow}</div>
					<h2>
						<RichText.Content value={heading} />
					</h2>
					<p>
						<RichText.Content value={leadText} />
					</p>
					<ul className="lead-points">
						{points.map((p, i) => (
							<li key={i}>
								<RichText.Content value={p} />
							</li>
						))}
					</ul>
				</div>

				{useCF7 ? (
					<div className="lead-form cf7-form">
						<h3>
							<RichText.Content value={formTitle} />
						</h3>
						<div className="cf7-output">{formShortcode}</div>
					</div>
				) : (
					<form className="lead-form" onsubmit="return false;">
						<h3>
							<RichText.Content value={formTitle} />
						</h3>
						<input type="text" placeholder={formNamePlaceholder} />
						<input type="tel" placeholder={formTelPlaceholder} />
						<button type="submit" className="btn btn-block">
							{formButtonText}
						</button>
						<p className="consent">
							{beforeLink}
							{consentLinkText && (
								<a
									href={consentLinkHref || "#"}
									style={{
										color: "var(--muted)",
										textDecoration: "underline",
									}}
								>
									{consentLinkText}
								</a>
							)}
							{afterLink}
						</p>
					</form>
				)}
			</div>
		</section>
	);
}
