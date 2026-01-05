import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import {
  general as defaultGeneral,
  education as defaultEducation,
  experience as defaultExperience,
  templates,
} from "./modules/data";
import Resume from "./components/Resume";

function App() {
  const [general, setGeneral] = useState(defaultGeneral);
  const [education, setEducation] = useState(defaultEducation);
  const [experience, setExperience] = useState(defaultExperience);
  const [isEditable, setIsEditable] = useState("true");
  function toggleEditable() {
    setIsEditable(!isEditable);
  }

  const states = {
    general: [general, setGeneral],
    education: [education, setEducation],
    experience: [experience, setExperience],
  };

  function addItem(event) {
    const { collectionKey } = event.target.dataset;
    const [collection, setCollection] = states[collectionKey];
    const id = crypto.randomUUID();
    const newItem = { ...templates[collectionKey], id };
    setCollection(getUpdatedCollection(collection, newItem));
  }

  function getUpdatedCollection(collection, item) {
    return { ...collection, [item.id]: item };
  }

  function getUpdatedItem(item, portion) {
    return { ...item, ...portion };
  }

  function updateItem(event) {
    const newValue = event.target.value;
    const { collectionKey, itemId, fieldKey } = event.target.dataset;

    if (collectionKey) {
      const [collection, setCollection] = states[collectionKey];
      const item = collection[itemId];
      const portion = { [fieldKey]: newValue };
      const updatedItem = getUpdatedItem(item, portion);
      setCollection(getUpdatedCollection(collection, updatedItem));
    } else {
      const [item, setItem] = states["general"];
      const portion = { [fieldKey]: newValue };
      const updatedItem = getUpdatedItem(item, portion);
      setItem(updatedItem);
    }
  }

  function getTrimmedCollection(collection, id) {
    const copy = { ...collection };
    delete copy[id];
    return copy;
  }

  function deleteItem(event) {
    const { collectionKey, itemId } = event.target.dataset;
    const [collection, setCollection] = states[collectionKey];
    setCollection(getTrimmedCollection(collection, itemId));
  }
  return (
    <>
      {/* <Form
        {...{
          general,
          education,
          experience,
          addItem,
          updateItem,
          deleteItem,
        }}
      /> */}
      <Resume
        {...{
          general,
          education,
          experience,
        }}
      />
    </>
  );
}

export default App;
