import "@styles/Resume.css";
import { titleCase } from "../modules/utils";
import { CollectionProvider } from "./CollectionContext";
import Section from "./Section";
import Header from "./Header";
import {
  createEmptyItem,
  contact as exampleContact,
  education as exampleEducation,
  experience as exampleExperience,
} from "../modules/data";
import { useIsEditing } from "./IsEditingContext";

export default function Resume({ shouldUseExample, resettingKey }) {
  const isEditing = useIsEditing();

  const { contact, education, experience } = getInitialData(shouldUseExample);

  return (
    <main className={`resume ${isEditing && "editing"}`}>
      <Header key={resettingKey} {...{ contact }}></Header>
      {Object.entries({ education, experience }).map(
        ([key, collection], idx) => {
          return (
            <CollectionProvider
              key={"" + resettingKey + idx}
              initialCollection={collection}
            >
              <Section title={titleCase(key)}></Section>
            </CollectionProvider>
          );
        }
      )}
    </main>
  );
}

function getInitialData(shouldUseExample) {
  let item;
  let contact = {};
  let education = {};
  let experience = {};
  item = createEmptyItem();
  education[item.id] = item;
  item = createEmptyItem();
  experience[item.id] = item;
  if (shouldUseExample) {
    contact = { ...exampleContact };
    education = { ...exampleEducation, ...education };
    experience = { ...exampleExperience, ...experience };
  }

  return { contact, education, experience };
}
