import "@styles/Field.css";

export default function Field({
  label,
  collection,
  itemId,  
  fieldKey,
  value,
  onChange,
}) {
  const id = `${itemId}-${fieldKey}`;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        data-collection={collection}
        data-item-id={itemId}
        data-field-key={fieldKey}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
