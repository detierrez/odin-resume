import { useCollection, useCollectionDispatch } from "./CollectionContext";

export default function Item({ id }) {
  const collection = useCollection();
  const dispatch = useCollectionDispatch();

  const { organization, role, startDate, endDate, location, tasks } =
    collection[id];

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
    console.log(idx)
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

  return (
    <>
      <div className="bullet">
        <button onClick={handleDeleteItem}>×</button>
        <div>&bull;</div>
      </div>
      <button className="add" onClick={handleAddTask}>
        +
      </button>
      <input
        className="organization bold"
        data-key="organization"
        placeholder="Organization..."
        value={organization}
        onChange={handleUpdateItem}
      />
      <input
        className="role italic"
        data-key="role"
        placeholder="Role..."
        value={role}
        onChange={handleUpdateItem}
      />
      <div className="date date italic">
        <input
          className="start-date"
          data-key="startDate"
          placeholder="Start date"
          value={startDate}
          onChange={handleUpdateItem}
        />{" "}
        -{" "}
        <input
          className="end-date"
          data-key="endDate"
          placeholder="End date"
          value={endDate}
          onChange={handleUpdateItem}
        />
      </div>{" "}
      <input
        className="location"
        data-key="location"
        placeholder="Location..."
        value={location}
        onChange={handleUpdateItem}
      />
      {tasks && (
        <ul className="tasks">
          {tasks.map((text, idx) => (
            <li key={idx}>
              <div className="bullet">
                <button data-idx={idx} onClick={handleDeleteTask}>×</button>
                <div>&bull;</div>
              </div>
              <input
                className="task"
                data-key="tasks"
                data-idx={idx}
                placeholder="Add a detail..."
                value={text ?? ""}
                onChange={handleUpdateItem}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
