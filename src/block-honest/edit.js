import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "./editor.scss";

const TEXT_ALLOWED_FORMATS = [
	"core/bold",
	"core/italic",
	"core/text-color",
	"core/link",
];

export default function Edit({ attributes, setAttributes }) {
	const { eyebrow, heading, lede, items } = attributes;

	const resolvedItems =
		Array.isArray(items) && items.length ? items : [{ title: "", text: "" }];

	const updateItem = (index, patch) => {
		const next = resolvedItems.map((it, i) => (i === index ? { ...it, ...patch } : it));
		setAttributes({ items: next });
	};

	const addItem = () => {
		setAttributes({
			items: [...resolvedItems, { title: __("Новая карточка", "blocks-garage"), text: "" }],
		});
	};

	const removeItem = (index) => {
		setAttributes({ items: resolvedItems.filter((_, i) => i !== index) });
	};

	const moveItem = (fromIndex, toIndex) => {
		if (toIndex < 0 || toIndex >= resolvedItems.length) return;
		const next = [...resolvedItems];
		const [item] = next.splice(fromIndex, 1);
		next.splice(toIndex, 0, item);
		setAttributes({ items: next });
	};

	const blockProps = useBlockProps({
		className: "section-alt",
	});

	return (
		<>
			<BlockControls group="inline" />

			<InspectorControls>
				<PanelBody title={__("Настройки", "blocks-garage")} initialOpen={true}>
					<TextControl
						label={__("Eyebrow", "blocks-garage")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
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
							allowedFormats={TEXT_ALLOWED_FORMATS}
							multiline={false}
							preserveWhiteSpace={true}
						/>
					</div>

					<RichText
						tagName="p"
						className="lede"
						value={lede}
						onChange={(val) => setAttributes({ lede: val })}
						allowedFormats={TEXT_ALLOWED_FORMATS}
						preserveWhiteSpace={true}
					/>

					<div className="honest-list">
						{resolvedItems.map((item, index) => (
							<div className="honest-item" key={index}>
								<RichText
									tagName="h4"
									value={item?.title || ""}
									onChange={(val) => updateItem(index, { title: val })}
									allowedFormats={[]}
									multiline={false}
									preserveWhiteSpace={true}
								/>
								<RichText
									tagName="p"
									value={item?.text || ""}
									onChange={(val) => updateItem(index, { text: val })}
									allowedFormats={TEXT_ALLOWED_FORMATS}
									preserveWhiteSpace={true}
								/>
								<div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
									<Button
										variant="secondary"
										onClick={() => moveItem(index, index - 1)}
										disabled={index === 0}
									>
										{__("Вверх", "blocks-garage")}
									</Button>
									<Button
										variant="secondary"
										onClick={() => moveItem(index, index + 1)}
										disabled={index === resolvedItems.length - 1}
									>
										{__("Вниз", "blocks-garage")}
									</Button>
									<Button
										variant="secondary"
										onClick={() => removeItem(index)}
										disabled={resolvedItems.length <= 1}
									>
										{__("Удалить", "blocks-garage")}
									</Button>
								</div>
							</div>
						))}
					</div>

					<div style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}>
						<Button variant="secondary" onClick={addItem}>
							{__("Добавить карточку", "blocks-garage")}
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
