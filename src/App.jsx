import { useState } from "react";
import "./App.css";
import Resume from "./components/Resume";
import { IsEditingContext } from "./components/IsEditingContext";

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [resettingKey, setResettingKey] = useState(0);
  const [shouldUseExample, setshouldUseExample] = useState(true);

  function toggleIsEditing() {
    setIsEditing(!isEditing);
  }

  function clearData() {
    setshouldUseExample(false)
    setResettingKey(resettingKey + 1);
  }

  return (
    <IsEditingContext value={isEditing}>
      <div className="menu">
        <span>{isEditing ? "Fill in your resume... 📝" : "Done! 🎉"}</span>
        {isEditing && <button onClick={clearData}>Clear</button>}
        <button onClick={toggleIsEditing}>
          {isEditing ? "✓ Looks good" : "← Go back"}
        </button>
      </div>
      <Resume {...{shouldUseExample, resettingKey}} />
    </IsEditingContext>
  );
}

export default App;
