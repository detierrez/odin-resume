import { useIsEditing } from "./IsEditingContext";

export default function Field({
  className = "",
  fieldKey,
  idx,
  value,
  placeholder = "",
  onChange,
}) {
  const isEditing = useIsEditing();
  return isEditing ? (
    <input
      className={className}
      data-key={fieldKey}
      data-idx={idx}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  ) : (
    <span className={className}>{value}</span>
  );
}
