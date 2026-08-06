import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		eyebrow,
		heading,
		col1Header,
		col2Header,
		rows,
		priceNote,
		imageSrc,
		imageAlt,
		masterNote,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "section-alt",
	});

	return (
		<section {...blockProps} id="price">
			<div className="wrap">
				<div className="section-head">
					<div className="eyebrow">{eyebrow}</div>
					<h2>
						<RichText.Content value={heading} />
					</h2>
				</div>

				<div className="price-wrap">
					<div>
						<table className="price-table">
							<thead>
								<tr>
									<th>{col1Header}</th>
									<th>{col2Header}</th>
								</tr>
							</thead>
							<tbody>
								{rows.map((row, index) => (
									<tr key={index} className={row.promo ? "promo" : ""}>
										<td>
											<RichText.Content value={row.name} />
											{row.promo && row.tag && (
												<span className="tag-promo">{row.tag}</span>
											)}
										</td>
										<td>
											{row.promo ? (
												<>
													{row.oldPrice && (
														<span className="old-price">
															<RichText.Content value={row.oldPrice} />
														</span>
													)}
													{row.newPrice && (
														<span className="new-price">
															<RichText.Content value={row.newPrice} />
														</span>
													)}
												</>
											) : (
												<RichText.Content value={row.price} />
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<p className="price-note">
							<RichText.Content value={priceNote} />
						</p>
					</div>

					<div className="price-side">
						{imageSrc && <img src={imageSrc} alt={imageAlt} />}
						<div className="master-note">
							<b>Важно:</b>
							<RichText.Content value={masterNote} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
