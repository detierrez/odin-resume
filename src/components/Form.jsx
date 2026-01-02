import "@styles/Form.css";
import General from "./General";
import Collection from "./Collection";

export default function Form({
  general,
  education,
  experience,
  addItem,
  updateItem,
  deleteItem,
}) {
  function preventDefault(e) {
    e.preventDefault();
  }

  return (
    <form className="form" onSubmit={preventDefault}>
      <General {...{ general, updateItem }} />
      <Collection
        {...{
          collection: education,
          collectionKey: Object.keys({ education })[0],
          addItem,
          updateItem,
          deleteItem,
        }}
      />
      <Collection
        {...{
          collection: experience,
          collectionKey: Object.keys({ experience })[0],
          addItem,
          updateItem,
          deleteItem,
        }}
      />
      <button>Submit</button>
    </form>
  );
}
