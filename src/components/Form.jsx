import "@styles/Form.css";
import Collection from "./Collection";
import Item from "./Item";

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
      <section>
        <h2>General</h2>
        <Item {...{ item: general, updateItem }} />
      </section>
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
