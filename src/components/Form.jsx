import "@styles/Form.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

export default function Form({
  general,
  education,
  experience,
  updateGeneral,
  addEducation,
  updateEducation,
  addExperience,
  updateExperience,
}) {
  function preventDefault(e) {
    e.preventDefault();
  }
  return (
    <form className="resume" onSubmit={preventDefault}>
      <h2>General</h2>
      {/* <General {...{ general, onChange: updateGeneral }} /> */}
      <h2>Education</h2>
      <Education
        {...{ education, onClick: addEducation, onChange: updateEducation }}
      />
      <h2>Experience</h2>
      <Experience
        {...{ experience, onClick: addExperience, onChange: updateExperience }}
      />
      <button>Submit</button>
    </form>
  );
}
