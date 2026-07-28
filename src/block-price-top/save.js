import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		col1Header,
		col2Header,
		col3Header,
		service1Name,
		service1OldPrice,
		service1NewPrice,
		service1Description,
		service2Name,
		service2OldPrice,
		service2NewPrice,
		service2Description,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "price-top-block",
	});

	return (
		<section {...blockProps}>
			<section className="wrap wrap-top">
				<table className="price-table">
					<thead>
						<tr>
							<th>{col1Header}</th>
							<th>{col2Header}</th>
							<th>{col3Header}</th>
						</tr>
					</thead>
					<tbody>
						<tr className="promo">
							<td>{service1Name}</td>
							<td>
								{service1OldPrice && (
									<span className="old-price">{service1OldPrice}</span>
								)}
								<span className="new-price">{service1NewPrice}</span>
							</td>
							<td>
								<span className="description-price">
									<RichText.Content value={service1Description} />
								</span>
							</td>
						</tr>
						<tr className="promo">
							<td>{service2Name}</td>
							<td>
								{service2OldPrice && (
									<span className="old-price">{service2OldPrice}</span>
								)}
								<span className="new-price">{service2NewPrice}</span>
							</td>
							<td>
								<span className="description-price">
									<RichText.Content value={service2Description} />
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</section>
	);
}
