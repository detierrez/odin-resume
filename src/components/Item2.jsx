export default function Item2({
  organization,
  role,
  startDate,
  endDate,
  location,
  bullet,
}) {
  return (
    <>
      <input className="organization bold" value={organization} />
      <input className="role italic" value={role} />
      <div className="date date italic">
        <input className="start-date" value={startDate} /> -{" "}
        <input className="end-date" value={endDate} />
      </div>{" "}
      <input className="location" value={location} />
      {bullet && <textarea className="bullet">{bullet}</textarea>}
    </>
  );
}
