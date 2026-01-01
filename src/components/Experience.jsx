import Field from "./Field";

export default function Experience({ experience, onClick, onChange }) {
  return (
    <>
      {Object.entries(experience).map(([id, { company, position, responsibilities, startDate, endDate }]) => (
          <div key={id} className="group">
            <Field
              {...{
                label: "Company",
                rootId: id,
                rootProperty: "company",
                value: company,
                onChange,
              }}
            />
            <Field
              {...{
                label: "Position",
                rootId: id,
                rootProperty: "position",
                value: position,
                onChange,
              }}
            />{" "}
            <Field
              {...{
                label: "responsibilities",
                rootId: id,
                rootProperty: "responsibilities",
                value: responsibilities,
                onChange,
              }}
            />{" "}
            <Field
              {...{
                label: "Start date",
                rootId: id,
                rootProperty: "startDate",
                value: startDate,
                onChange,
              }}
            />{" "}
            <Field
              {...{
                label: "End date",
                rootId: id,
                rootProperty: "endDate",
                value: endDate,
                onChange,
              }}
            />
          </div>
        )
      )}
      <button onClick={onClick}>+ Add experience</button>
    </>
  );
}
