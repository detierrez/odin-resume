import Field from "./Field";
import { camelToTitleCase } from "./utils";

export default function Item({
  item,
  collectionKey,
  updateItem,
  children,
}) {
  return (
    <div className="item">
      {Object.entries(item).map(([fieldKey, value]) => {
        if (fieldKey === "id") return;
        return (
          <Field
            key={`${fieldKey}`}
            {...{
              label: camelToTitleCase(fieldKey),
              collectionKey,
              itemId: item.id,
              fieldKey,
              value,
              onChange: updateItem,
            }}
          />
        );
      })}
      {children}
    </div>
  );
}
