import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import {
  general as defaultGeneral,
  education as defaultEducation,
  experience as defaultExperience,
} from "./data";

function App() {
  const [general, setGeneral] = useState(defaultGeneral);
  const [education, setEducation] = useState(defaultEducation);
  const [experience, setExperience] = useState(defaultExperience);

  function updateGeneral(event) {
    setGeneral(getUpdatedItem(event, general).item);
  }

  function addEducation() {
    const id = crypto.randomUUID();
    const newItem = { id, institution: "", title: "", date: "" };
    setEducation(getUpdatedCollection(education, newItem));
  }

  function updateEducation(event) {
    updateCollection(event, setEducation, education);
  }

  function updateExperience(event) {
    updateCollection(event, setExperience, experience);
  }

  function updateCollection(event, setCollection, collection) {
    const { id, itemPortion } = getUpdatedProperty(event);
    const updatedItem = getUpdatedItem(collection[id], itemPortion);
    const updatedEducation = getUpdatedCollection(collection, updatedItem);
    setCollection(updatedEducation);
  }

  function getUpdatedCollection(collection, item) {
    return { ...collection, [item.id]: item };
  }

  function getUpdatedItem(item, portion) {
    return { ...item, ...portion };
  }

  function getUpdatedProperty(event) {
    const [id, property] = event.target.id.split("_");
    const newValue = event.target.value;
    return { id, itemPortion: { [property]: newValue } };
  }

  function addExperience() {
    const id = crypto.randomUUID();
    const newItem = {
      id,
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    };
    setExperience(getUpdatedCollection(experience, newItem));
  }

  return (
    <>
      <Form
        {...{
          education,
          experience,
          general,
          updateGeneral,
          addEducation,
          updateEducation,
          addExperience,
          updateExperience,
        }}
      />
    </>
  );
}

export default App;
