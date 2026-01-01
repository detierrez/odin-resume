import Field from "./Field";

export default function General({ general: { name, email, phone }, onChange }) {
  return (
    <div className="group">
      <Field
        {...{
          label: "Name",
          rootId: "general",
          rootProperty: "name",
          value: name,
          onChange,
        }}
      />
      <Field
        {...{
          label: "Email",
          rootId: "general",
          rootProperty: "email",
          value: email,
          onChange,
        }}
      />
      <Field
        {...{
          label: "Phone",
          rootId: "general",
          rootProperty: "phone",
          value: phone,
          onChange,
        }}
      />
    </div>
  );
}
