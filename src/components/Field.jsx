import "@styles/Field.css"

export default function Field({ label, rootId, rootProperty, value, onChange }) {
  const fieldId = `${rootId}_${rootProperty}`;
  return (
    <div className="field">
      <label htmlFor={fieldId}>{label}</label>
      <input type="text" id={fieldId} value={value} onChange={onChange} />
    </div>
  );
}
