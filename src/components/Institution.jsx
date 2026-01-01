export default function Institution({ institution, title, date }) {
  return (
    <div className="institution">
      <input type="text" value={institution} />
      <input type="text" value={title} />
      <input type="text" value={date} />
    </div>
  );
}
