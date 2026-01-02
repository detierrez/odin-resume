import Field from "./Field";
import { camelToTitleCase } from "./utils";

export default function Collection({
  collection,
  addItem,
  updateItem,
  deleteItem,
}) {
  const title = collection.name[0].toUpperCase() + collection.name.slice(1);

  const items = Object.values(collection).map((item) => {
    if (typeof item === 'string') return;
    const commonProps = {
      collection: collection.name,
      itemId: item.id,
      onChange: updateItem,
    };
    return (
      <div key={item.id} className="group">
        {Object.entries(item).map(([fieldKey, value]) =>
          scaffoldField(item.id, commonProps, fieldKey, value)
        )}
        <button
          onClick={deleteItem}
          data-collection={collection.name}
          data-item-id={item.id}
        >
          Delete
        </button>
      </div>
    );
  });

  function scaffoldField(itemId, commonProps, fieldKey, value) {
    if (fieldKey === "id") return;
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
      <h2>{title}</h2>
      {items}
      <button data-collection={collection.name} onClick={addItem}>
        + Add {title}
      </button>
    </section>
  );
}