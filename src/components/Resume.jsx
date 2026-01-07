import "@styles/Resume.css";
import Item from "./Item";
import { titleCase } from "../modules/utils";
import { CollectionProvider } from "./CollectionContext";
import Section from "./Section";

export default function Resume({ general, education, experience }) {
  return (
    <main className="resume">
      <header>
        <h1 className="author">
          <input type="text" className="bold" value={general.name} readOnly />
        </h1>
        <div className="email">
          Email: <input type="text" value={general.email} readOnly />
        </div>
        <div className="website">
          <input type="text" value={general.website} readOnly />
        </div>
        <div className="phone">
          Phone: <input type="text" value={general.phone} readOnly />
        </div>
      </header>
      {Object.entries({ education, experience }).map(
        ([key, collection], idx) => {
          return (
            <CollectionProvider key={idx} initialCollection={collection}>
              <Section title={titleCase(key)}></Section>
            </CollectionProvider>
          );
        }
      )}
    </main>
  );
}
