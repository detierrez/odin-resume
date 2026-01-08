import { useCollection, useCollectionDispatch } from "./CollectionContext";
import Field from "./Field";
import { useIsEditing } from "./IsEditingContext";

export default function Item({ id }) {
  const collection = useCollection();
  const dispatch = useCollectionDispatch();
  const isEditing = useIsEditing();

  const item = { ...collection[id] };
  const tasks = item.tasks;

  function handleUpdateItem(event) {
    const newValue = event.target.value;
    const key = event.target.dataset.key;

    if (key === "tasks") {
      const idx = Number(event.target.dataset.idx);
      return dispatch({
        type: "update",
        item: {
          id,
          tasks: tasks.with(idx, newValue),
        },
      });
    }

    return dispatch({
      type: "update",
      item: {
        id,
        [key]: newValue,
      },
    });
  }

  function handleAddTask() {
    const newArray = [...(tasks || [])];
    newArray.push("");
    return dispatch({
      type: "update",
      item: {
        id,
        tasks: newArray,
      },
    });
  }

  function handleDeleteTask(event) {
    const idx = Number(event.target.dataset.idx);
    console.log(idx);
    return dispatch({
      type: "update",
      item: {
        id,
        tasks: tasks.filter((task, i) => i !== idx),
      },
    });
  }

  function handleDeleteItem() {
    return dispatch({
      type: "delete",
      item: {
        id,
      },
    });
  }

  const placeholders = {
    organization: "In this organization...",
    role: "My role was...",
    location: "Location...",
    startDate: "Start date...",
    endDate: "End date...",
  };

  for (const fieldKey of Object.keys(collection[id])) {
    if (fieldKey === "tasks") continue;
    const addedClass =
      fieldKey === "organization"
        ? " bold"
        : fieldKey === "role"
        ? " italic"
        : "";
    item[fieldKey] = (
      <Field
        {...{
          className: fieldKey + addedClass,
          fieldKey,
          value: collection[id][fieldKey],
          placeholder: placeholders[fieldKey],
          onChange: handleUpdateItem,
        }}
      />
    );
  }

  return (
    <>
      <div className="bullet">
        {isEditing && <button onClick={handleDeleteItem}>×</button>}
        <div>&bull;</div>
      </div>
      {isEditing && (
        <button className="add add-button" onClick={handleAddTask}>
          +
        </button>
      )}
      {item.organization}
      {item.role}
      {item.location}
      <div className="date">
        {item.startDate}- {item.endDate}
      </div>
      {tasks && (
        <ul className="tasks">
          {tasks.map((text, idx) => (
            <li key={idx}>
              <div className="bullet">
                {isEditing && (
                  <button data-idx={idx} onClick={handleDeleteTask}>
                    ×
                  </button>
                )}
                <div>&bull;</div>
              </div>

              <Field
                {...{
                  className: "task",
                  fieldKey: "tasks",
                  idx,
                  value: text,
                  placeholder: "Some detail...",
                  onChange: handleUpdateItem,
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
