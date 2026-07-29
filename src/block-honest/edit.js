import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		heading,
		lede,
		item1Title,
		item1Text,
		item2Title,
		item2Text,
		item3Title,
		item3Text,
		item4Title,
		item4Text,
		item5Title,
		item5Text,
	} = attributes;

	const blockProps = useBlockProps({ className: "section-alt honest-work" });

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Настройки блока «Наш подход»", "blocks-garage")}
					initialOpen={true}
				>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "blocks-garage")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<TextareaControl
						label={__("Вводный текст (lede)", "blocks-garage")}
						value={lede}
						onChange={(val) => setAttributes({ lede: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Список элементов", "blocks-garage")}
					initialOpen={false}
				>
					<TextControl
						label={__("Заголовок 1", "blocks-garage")}
						value={item1Title}
						onChange={(val) => setAttributes({ item1Title: val })}
					/>
					<TextareaControl
						label={__("Текст 1", "blocks-garage")}
						value={item1Text}
						onChange={(val) => setAttributes({ item1Text: val })}
					/>

					<TextControl
						label={__("Заголовок 2", "blocks-garage")}
						value={item2Title}
						onChange={(val) => setAttributes({ item2Title: val })}
					/>
					<TextareaControl
						label={__("Текст 2", "blocks-garage")}
						value={item2Text}
						onChange={(val) => setAttributes({ item2Text: val })}
					/>

					<TextControl
						label={__("Заголовок 3", "blocks-garage")}
						value={item3Title}
						onChange={(val) => setAttributes({ item3Title: val })}
					/>
					<TextareaControl
						label={__("Текст 3", "blocks-garage")}
						value={item3Text}
						onChange={(val) => setAttributes({ item3Text: val })}
					/>

					<TextControl
						label={__("Заголовок 4", "blocks-garage")}
						value={item4Title}
						onChange={(val) => setAttributes({ item4Title: val })}
					/>
					<TextareaControl
						label={__("Текст 4", "blocks-garage")}
						value={item4Text}
						onChange={(val) => setAttributes({ item4Text: val })}
					/>

					<TextControl
						label={__("Заголовок 5", "blocks-garage")}
						value={item5Title}
						onChange={(val) => setAttributes({ item5Title: val })}
					/>
					<TextareaControl
						label={__("Текст 5", "blocks-garage")}
						value={item5Text}
						onChange={(val) => setAttributes({ item5Text: val })}
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
							placeholder={__("Введите заголовок H2…", "blocks-garage")}
						/>
					</div>
					<p className="lede">{lede}</p>

					<div className="honest-list">
						<div className="honest-item">
							<h4>{item1Title}</h4>
							<p>{item1Text}</p>
						</div>
						<div className="honest-item">
							<h4>{item2Title}</h4>
							<p>{item2Text}</p>
						</div>
						<div className="honest-item">
							<h4>{item3Title}</h4>
							<p>{item3Text}</p>
						</div>
						<div className="honest-item">
							<h4>{item4Title}</h4>
							<p>{item4Text}</p>
						</div>
						<div className="honest-item">
							<h4>{item5Title}</h4>
							<p>{item5Text}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
