import "@styles/Field.css";

export default function Field({
  label,
  collectionKey,
  itemId,
  fieldKey,
  value,
  onChange,
}) {
  const id = `${crypto.randomUUID()}`;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        data-collection-key={collectionKey}
        data-item-id={itemId}
        data-field-key={fieldKey}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
