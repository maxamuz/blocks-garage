import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
} from "@wordpress/components";
import "./editor.scss";

const DESC_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/text-color",
	"core/link",
	"core/list",
	"core/underline",
];

export default function Edit({ attributes, setAttributes }) {
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

	const blockProps = useBlockProps({
		className: "price-top-block",
	});

	return (
		<>
			<BlockControls group="inline" />

			<InspectorControls>
				<PanelBody
					title={__("Заголовки таблицы", "blocks-garage")}
					initialOpen={false}
				>
					<TextControl
						label={__("Колонка 1", "blocks-garage")}
						value={col1Header}
						onChange={(val) => setAttributes({ col1Header: val })}
					/>
					<TextControl
						label={__("Колонка 2", "blocks-garage")}
						value={col2Header}
						onChange={(val) => setAttributes({ col2Header: val })}
					/>
					<TextControl
						label={__("Колонка 3", "blocks-garage")}
						value={col3Header}
						onChange={(val) => setAttributes({ col3Header: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Услуга 1 (строка)", "blocks-garage")}
					initialOpen={true}
				>
					<TextControl
						label={__("Наименование", "blocks-garage")}
						value={service1Name}
						onChange={(val) => setAttributes({ service1Name: val })}
					/>
					<TextControl
						label={__("Старая цена", "blocks-garage")}
						value={service1OldPrice}
						onChange={(val) => setAttributes({ service1OldPrice: val })}
					/>
					<TextControl
						label={__("Новая цена", "blocks-garage")}
						value={service1NewPrice}
						onChange={(val) => setAttributes({ service1NewPrice: val })}
					/>
					<TextareaControl
						label={__("Описание (текст, без списка)", "blocks-garage")}
						help={__("Список редактируется прямо в блоке.", "blocks-garage")}
						value={service1Description.replace(/<[^>]+>/g, "")}
						onChange={() => {}}
					/>
				</PanelBody>

				<PanelBody
					title={__("Услуга 2 (строка)", "blocks-garage")}
					initialOpen={false}
				>
					<TextControl
						label={__("Наименование", "blocks-garage")}
						value={service2Name}
						onChange={(val) => setAttributes({ service2Name: val })}
					/>
					<TextControl
						label={__("Старая цена", "blocks-garage")}
						value={service2OldPrice}
						onChange={(val) => setAttributes({ service2OldPrice: val })}
					/>
					<TextControl
						label={__("Новая цена", "blocks-garage")}
						value={service2NewPrice}
						onChange={(val) => setAttributes({ service2NewPrice: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<section className="wrap wrap-top">
					<table className="price-table">
						<thead>
							<tr>
								<th>
									<RichText
										tagName="span"
										value={col1Header}
										onChange={(val) => setAttributes({ col1Header: val })}
										allowedFormats={[]}
									/>
								</th>
								<th>
									<RichText
										tagName="span"
										value={col2Header}
										onChange={(val) => setAttributes({ col2Header: val })}
										allowedFormats={[]}
									/>
								</th>
								<th>
									<RichText
										tagName="span"
										value={col3Header}
										onChange={(val) => setAttributes({ col3Header: val })}
										allowedFormats={[]}
									/>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="promo">
								<td>
									<RichText
										tagName="span"
										value={service1Name}
										onChange={(val) => setAttributes({ service1Name: val })}
										allowedFormats={[]}
									/>
								</td>
								<td>
									{service1OldPrice && (
										<RichText
											tagName="span"
											className="old-price"
											value={service1OldPrice}
											onChange={(val) =>
												setAttributes({ service1OldPrice: val })
											}
											allowedFormats={[]}
										/>
									)}
									<RichText
										tagName="span"
										className="new-price"
										value={service1NewPrice}
										onChange={(val) =>
											setAttributes({ service1NewPrice: val })
										}
										allowedFormats={[]}
									/>
								</td>
								<td>
									<span className="description-price">
										<RichText
											value={service1Description}
											onChange={(val) =>
												setAttributes({ service1Description: val })
											}
											allowedFormats={DESC_ALLOWED_FORMATS}
											preserveWhiteSpace={true}
										/>
									</span>
								</td>
							</tr>
							<tr className="promo">
								<td>
									<RichText
										tagName="span"
										value={service2Name}
										onChange={(val) => setAttributes({ service2Name: val })}
										allowedFormats={[]}
									/>
								</td>
								<td>
									{service2OldPrice && (
										<RichText
											tagName="span"
											className="old-price"
											value={service2OldPrice}
											onChange={(val) =>
												setAttributes({ service2OldPrice: val })
											}
											allowedFormats={[]}
										/>
									)}
									<RichText
										tagName="span"
										className="new-price"
										value={service2NewPrice}
										onChange={(val) =>
											setAttributes({ service2NewPrice: val })
										}
										allowedFormats={[]}
									/>
								</td>
								<td>
									<span className="description-price">
										<RichText
											value={service2Description}
											onChange={(val) =>
												setAttributes({ service2Description: val })
											}
											allowedFormats={DESC_ALLOWED_FORMATS}
											preserveWhiteSpace={true}
										/>
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</section>
		</>
	);
}
