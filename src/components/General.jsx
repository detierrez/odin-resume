import Field from "./Field";
import { camelToTitleCase } from "./utils";

export default function General({
  general: item,
  updateItem,
}) {

  const commonProps = {
    onChange: updateItem,
  };

  return (
    <div className="group">
      {Object.entries(item).map(([fieldKey, value]) =>
        scaffoldField("general", commonProps, fieldKey, value)
      )}
    </div>
  );

  function scaffoldField(itemId, commonProps, fieldKey, value) {
    console.log(arguments)
    return (
      <Field
        key={`${itemId}_${fieldKey}`}
        {...{
          label: camelToTitleCase(fieldKey),
          fieldKey,
          value,
          ...commonProps,
        }}
      />
    );
  }

  return (
    <section>
      <h2>General</h2>

      <div className="group">
        <Field
          {...{
            label,
            collection,
            itemId,
            fieldKey,
            value,
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
        <Field
          {...{
            label: "Website",
            rootId: "general",
            rootProperty: "website",
            value: website,
            onChange,
          }}
        />
      </div>
    </section>
  );
}
