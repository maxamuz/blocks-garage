import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
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

  const blockProps = useBlockProps.save({ className: 'section-alt' });

  return (
    <section {...blockProps}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>{eyebrow}</div>
          <RichText.Content tagName="h2" value={heading} />
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
  );
}
