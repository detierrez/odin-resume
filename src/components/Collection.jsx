import Item from "./Item";

export default function Collection({
  isEditable,
  collection,
  addItem,
  updateItem,
  deleteItem,
}) {
  const title = collection.name[0].toUpperCase() + collection.name.slice(1);

  return (
    <section>
      <h2>{title}</h2>
      {Object.values(collection).map((item) => {
        if (typeof item === "string") return;
        const collectionKey = collection.name;
        return (
          <Item
            key={item.id}
            {...{
              isEditable,
              item,
              collectionKey: collection.name,
              updateItem,
            }}
          >
            <button
              onClick={deleteItem}
              data-collection-key={collectionKey}
              data-item-id={collectionKey && item.id}
            >
              Delete
            </button>
          </Item>
        );
      })}
      {isEditable && (
        <button data-collection-key={collection.name} onClick={addItem}>
          + Add {title}
        </button>
      )}
    </section>
  );
}
