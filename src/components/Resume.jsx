import { Fragment } from "react";
import "@styles/Resume2.css";
import Item2 from "./Item2";

export default function Resume({ general, education, experience }) {
  return (
    <main className="resume">
      <header>
        <h1 className="author">
          <input type="text" className="bold" value={general.name} />
        </h1>
        <div className="email">
          Email: <input type="text" value={general.email} />
        </div>
        <div className="website">
          <input type="text" value={general.website} />
        </div>
        <div className="phone">
          Phone: <input type="text" value={general.phone} />
        </div>
      </header>

      <section>
        <h2 className="heading">
          Education<button>+</button>
        </h2>
        <div className="education">
          <ul>
            {Object.values(education).map((item, idx) => (
              <li key={idx} className="item">
                <Item2
                  {...{
                    organization: item.institution,
                    role: item.title,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    location: item.location,
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="heading">
          Experience<button>+</button>
        </h2>
        <div className="experience">
          <ul>
            {Object.values(experience).map((item, idx) => {
              return (
                <li key={idx} className="item">
                  <Item2
                    {...{
                      organization: item.company,
                      role: item.position,
                      startDate: item.startDate,
                      endDate: item.endDate,
                      location: item.location,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
