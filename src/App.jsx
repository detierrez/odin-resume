import "./App.css";
import { general, education, experience } from "./modules/data";
import Resume from "./components/Resume";

function App() {
  return (
    <>
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
