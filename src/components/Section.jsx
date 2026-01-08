import { useCollection, useCollectionDispatch } from "./CollectionContext";
import { useIsEditing } from "./IsEditingContext";
import Item from "./Item";

export default function Section({ title }) {
  const collection = useCollection();
  const dispatch = useCollectionDispatch();
  const isEditing = useIsEditing();

  function addItem() {
    return dispatch({
      type: "add",
    });
  }

  return (
    <section>
      <h2 className="heading">
        {title}
        {isEditing && (
          <button className="add-button" onClick={addItem}>
            +
          </button>
        )}
      </h2>
      <ul>
        {Object.values(collection).map((item, idx) => (
          <li key={idx} className="item">
            <Item {...{ id: item.id }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
