import Field from "./Field";

export default function Education({ education, onClick, onChange }) {
  return (
    <>
      {Object.entries(education).map(([id, { institution, title, date }]) => (
        <div key={id} className="group">
          <Field
            {...{
              label: "Institution",
              rootId: id,
              rootProperty: "institution",
              value: institution,
              onChange,
            }}
          />
          <Field
            {...{
              label: "Title",
              rootId: id,
              rootProperty: "title",
              value: title,
              onChange,
            }}
          />
          <Field
            {...{
              label: "Graduation date",
              rootId: id,
              rootProperty: "date",
              value: date,
              onChange,
            }}
          />
        </div>
      ))}
      <button onClick={onClick}>+ Add education</button>
    </>
  );
}
