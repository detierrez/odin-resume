import { Fragment } from "react";
import "@styles/Resume.css";
import Item2 from "./Item2";

export default function Resume({ general, education, experience }) {
  return (
    <div className="resume">
      <main>
        <header>
          <h1>{general.name}</h1>
          <div className="contact flex-wrap">
            <div>{general.email}</div>
            <div>{general.phone}</div>
            <div>{general.website}</div>
          </div>
        </header>

        <section>
          <h2 className="heading">Education</h2>
          <div className="education">
            <ul>
              {Object.values(education).map((item, idx) => (
                <li key={idx}>
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
          <h2 className="heading">Experience</h2>
          <div className="experience">
            <ul>
              {Object.values(experience).map((item, idx) => {
                return (
                  <li key={idx}>
                    <Item2
                      {...{
                        organization: item.company,
                        role: item.position,
                        startDate: item.startDate,
                        endDate: item.endDate,
                        location: item.location,
                        bullet: item.responsibilities,
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
