export default function Item2({
  organization,
  role,
  startDate,
  endDate,
  location,
  tasks,
}) {
  return (
    <>
      <input
        className="organization bold"
        data-key="organization"
        value={organization}
      />
      <input className="role italic" data-key="role" value={role} />
      <div className="date date italic">
        <input className="start-date" data-key="start-date" value={startDate} />{" "}
        - <input className="end-date" data-key="end-date" value={endDate} />
      </div>{" "}
      <input className="location" data-key="location" value={location} />
      {tasks && (
        <ul className="tasks">
          {tasks.map((text, idx) => (
            <li key={idx}>
              <span className="bullet">
                <button>-</button>
                <span>&bull;</span>
              </span>
              <input className="location" value={text} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function onChange(event) {
  return dispatch({
    type: "changed",
    task: {
      ...task,
      text: e.target.value,
    },
  });
}
