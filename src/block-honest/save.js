import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { eyebrow, heading, lede, items } = attributes;

	const resolvedItems = Array.isArray(items) ? items : [];

	const blockProps = useBlockProps.save({
		className: "section-alt",
	});

	return (
		<section {...blockProps}>
			<div className="wrap">
				<div className="section-head">
					<div className="eyebrow" style={{ justifyContent: "center" }}>
						{eyebrow}
					</div>
					<RichText.Content tagName="h2" value={heading} />
				</div>

				<RichText.Content tagName="p" className="lede" value={lede} />

				<div className="honest-list">
					{resolvedItems.map((item, index) => (
						<div className="honest-item" key={index}>
							<h4>{item?.title}</h4>
							<RichText.Content tagName="p" value={item?.text} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
