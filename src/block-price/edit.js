import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	ToggleControl,
} from "@wordpress/components";
import "./editor.scss";

const HEADING_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/text-color",
	"core/link",
	"core/strikethrough",
	"core/superscript",
	"core/subscript",
	"core/highlight",
];

export default function Edit({ attributes, setAttributes }) {
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

	const blockProps = useBlockProps({
		className: "section-alt",
	});

	const updateRow = (index, field, value) => {
		const newRows = [...rows];
		newRows[index] = { ...newRows[index], [field]: value };
		setAttributes({ rows: newRows });
	};

	const addRow = () => {
		setAttributes({
			rows: [
				...rows,
				{
					name: "Новая услуга",
					promo: false,
					tag: "",
					oldPrice: "",
					newPrice: "",
					price: "от 0 ₽",
				},
			],
		});
	};

	const removeRow = (index) => {
		const newRows = rows.filter((_, i) => i !== index);
		setAttributes({ rows: newRows });
	};

	const moveRow = (index, direction) => {
		const newIndex = direction === "up" ? index - 1 : index + 1;
		if (newIndex < 0 || newIndex >= rows.length) return;
		const newRows = [...rows];
		[newRows[index], newRows[newIndex]] = [newRows[newIndex], newRows[index]];
		setAttributes({ rows: newRows });
	};

	const onSelectImage = (media) => {
		setAttributes({
			imageSrc: media.url,
			imageAlt: media.alt || imageAlt,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Заголовок секции", "blocks-garage")} initialOpen={true}>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "blocks-garage")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<p
						style={{ margin: "16px 0 8px", fontSize: "12px", color: "#757575" }}
					>
						{__("Заголовок H2 редактируется прямо в блоке.", "blocks-garage")}
					</p>
				</PanelBody>

				<PanelBody title={__("Заголовки таблицы", "blocks-garage")}>
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
				</PanelBody>

				<PanelBody title={__("Строки прайса", "blocks-garage")} initialOpen={true}>
					<Button
						variant="primary"
						onClick={addRow}
						style={{ marginBottom: "12px", width: "100%" }}
					>
						{__("+ Добавить строку", "blocks-garage")}
					</Button>
					{rows.map((row, index) => (
						<div
							key={index}
							style={{
								border: "1px solid #e0e0e0",
								borderRadius: "6px",
								padding: "12px",
								marginBottom: "10px",
								background: "#fafafa",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "8px",
									gap: "6px",
								}}
							>
								<b style={{ fontSize: "12px", color: "#111" }}>
									{__("Строка", "blocks-garage")} #{index + 1}
								</b>
								<div style={{ display: "flex", gap: "4px" }}>
									<Button
										variant="secondary"
										size="small"
										onClick={() => moveRow(index, "up")}
										disabled={index === 0}
									>
										↑
									</Button>
									<Button
										variant="secondary"
										size="small"
										onClick={() => moveRow(index, "down")}
										disabled={index === rows.length - 1}
									>
										↓
									</Button>
									<Button
										variant="secondary"
										size="small"
										isDestructive
										onClick={() => removeRow(index)}
									>
										✕
									</Button>
								</div>
							</div>
							<TextareaControl
								label={__("Наименование услуги", "blocks-garage")}
								value={row.name}
								onChange={(val) => updateRow(index, "name", val)}
								rows={2}
							/>
							<ToggleControl
								label={__("Акционная строка (promo)", "blocks-garage")}
								checked={!!row.promo}
								onChange={(val) => updateRow(index, "promo", val)}
							/>
							{row.promo && (
								<>
									<TextControl
										label={__("Тэг акции", "blocks-garage")}
										value={row.tag}
										onChange={(val) => updateRow(index, "tag", val)}
									/>
									<TextControl
										label={__("Старая цена", "blocks-garage")}
										value={row.oldPrice}
										onChange={(val) => updateRow(index, "oldPrice", val)}
									/>
									<TextControl
										label={__("Новая цена", "blocks-garage")}
										value={row.newPrice}
										onChange={(val) => updateRow(index, "newPrice", val)}
									/>
								</>
							)}
							{!row.promo && (
								<TextControl
									label={__("Стоимость (текст)", "blocks-garage")}
									value={row.price}
									onChange={(val) => updateRow(index, "price", val)}
								/>
							)}
						</div>
					))}
				</PanelBody>

				<PanelBody title={__("Примечания и картинка", "blocks-garage")}>
					<TextareaControl
						label={__("Примечание под таблицей", "blocks-garage")}
						value={priceNote}
						onChange={(val) => setAttributes({ priceNote: val })}
						rows={2}
					/>

					<MediaUploadCheck>
						<div style={{ marginTop: "8px" }}>
							<p style={{ fontSize: "12px", color: "#757575", margin: "8px 0" }}>
								{__("Картинка справа от таблицы", "blocks-garage")}
							</p>
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={["image"]}
								value={imageSrc}
								render={({ open }) => (
									<div>
										{imageSrc ? (
											<div style={{ position: "relative" }}>
												<img
													src={imageSrc}
													alt={imageAlt}
													style={{
														width: "100%",
														height: "auto",
														borderRadius: "6px",
														marginBottom: "6px",
													}}
												/>
												<Button
													variant="secondary"
													size="small"
													onClick={open}
													style={{ marginRight: "6px" }}
												>
													{__("Заменить", "blocks-garage")}
												</Button>
												<Button
													variant="secondary"
													size="small"
													isDestructive
													onClick={() =>
														setAttributes({ imageSrc: "", imageAlt: "" })
													}
												>
													{__("Удалить", "blocks-garage")}
												</Button>
											</div>
										) : (
											<Button variant="secondary" onClick={open}>
												{__("Выбрать изображение", "blocks-garage")}
											</Button>
										)}
									</div>
								)}
							/>
							<TextControl
								label={__("Alt изображения", "blocks-garage")}
								value={imageAlt}
								onChange={(val) => setAttributes({ imageAlt: val })}
								style={{ marginTop: "10px" }}
							/>
						</div>
					</MediaUploadCheck>

					<TextareaControl
						label={__("Примечание мастера (под картинкой)", "blocks-garage")}
						value={masterNote}
						onChange={(val) => setAttributes({ masterNote: val })}
						rows={3}
						style={{ marginTop: "12px" }}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="wrap">
					<div className="section-head">
						<div className="eyebrow" style={{ justifyContent: "center" }}>
							{eyebrow}
						</div>
						<RichText
							tagName="h2"
							value={heading}
							onChange={(val) => setAttributes({ heading: val })}
							allowedFormats={HEADING_ALLOWED_FORMATS}
							multiline={false}
							preserveWhiteSpace={true}
						/>
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
												<RichText
													tagName="span"
													value={row.name}
													onChange={(val) => updateRow(index, "name", val)}
													allowedFormats={HEADING_ALLOWED_FORMATS}
													multiline={false}
													preserveWhiteSpace={true}
												/>
												{row.promo && row.tag && (
													<span className="tag-promo">{row.tag}</span>
												)}
											</td>
											<td>
												{row.promo ? (
													<>
														{row.oldPrice && (
															<RichText
																tagName="span"
																className="old-price"
																value={row.oldPrice}
																onChange={(val) =>
																	updateRow(index, "oldPrice", val)
																}
																allowedFormats={[]}
																multiline={false}
															/>
														)}
														{row.newPrice && (
															<RichText
																tagName="span"
																className="new-price"
																value={row.newPrice}
																onChange={(val) =>
																	updateRow(index, "newPrice", val)
																}
																allowedFormats={[]}
																multiline={false}
															/>
														)}
													</>
												) : (
													<RichText
														tagName="span"
														value={row.price}
														onChange={(val) => updateRow(index, "price", val)}
														allowedFormats={[]}
														multiline={false}
													/>
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<RichText
								tagName="p"
								className="price-note"
								value={priceNote}
								onChange={(val) => setAttributes({ priceNote: val })}
								allowedFormats={HEADING_ALLOWED_FORMATS}
								multiline={false}
							/>
						</div>

						<div className="price-side">
							{imageSrc ? (
								<img src={imageSrc} alt={imageAlt} />
							) : (
								<div className="price-side-placeholder">
									{__("[ Выберите изображение в настройках ]", "blocks-garage")}
								</div>
							)}
							<div className="master-note">
								<RichText
									tagName="span"
									className="master-note-bold"
									value="Важно:"
									allowedFormats={[]}
									multiline={false}
								/>
								<RichText
									tagName="span"
									className="master-note-text"
									value={masterNote}
									onChange={(val) => setAttributes({ masterNote: val })}
									allowedFormats={HEADING_ALLOWED_FORMATS}
									multiline={false}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
