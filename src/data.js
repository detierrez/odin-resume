export const general = {
  name: "John Smith",
  email: "john@smith.com",
  phone: "555-555-5555",
};

const educationList = [
  {
    institution: "State University of Westford",
    title: "B.Sc. in Computer Science",
    date: "2016",
  },

  {
    institution: "Westford Institute of Technology",
    title: "M.Sc. in Software Engineering",
    date: "2018",
  },
];

export const experienceList = [
  {
    company: "BrightByte Solutions",
    position: "Frontend Developer",
    responsibilities:
      "Built responsive React applications, improved performance, and mentored junior developers.",
    startDate: "Jun 2021",
    endDate: "Present",
  },
  {
    company: "NovaTech Labs",
    position: "Junior Web Developer",
    responsibilities:
      "Implemented features for internal tools, wrote unit tests, and participated in agile sprints.",
    startDate: "Jan 2019",
    endDate: "May 2021",
  },
  {
    company: "PixelCraft Studio",
    position: "Frontend Intern",
    responsibilities:
      "Assisted in UI development, performed cross-browser testing, and fixed accessibility issues.",
    startDate: "Jun 2018",
    endDate: "Dec 2018",
  },
];

export const education = collectify(educationList);
export const experience = collectify(experienceList);

function collectify(list) {
  const collection = {};
  for (const item of list) {
    const id = crypto.randomUUID();
    collection[id] = { ...item, id };
  }

  return collection;
}
