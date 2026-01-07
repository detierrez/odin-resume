export const general = {
  name: "John Smith",
  email: "john@smith.com",
  phone: "+44 3245 5521 5521",
  website: "https://john.smith.com",
};

const educationList = [
  {
    organization: "State University of Westford",
    role: "B.Sc. in Computer Science",
    startDate: "Sep. 2012",
    endDate: "Sep. 2016",
    location: "Westford, MA",
  },
  {
    organization: "Westford Institute of Technology",
    role: "M.Sc. in Software Engineering",
    startDate: "Sep. 2016",
    endDate: "Oct. 2018",
    location: "Rivertown, CA",
  },
];

export const experienceList = [
  {
    organization: "BrightByte Solutions",
    role: "Frontend Developer",
    tasks: [
      "Built responsive React applications",
      "Improved performance and optimized bundle sizes",
      "Mentored junior developers and performed code reviews",
    ],
    startDate: "Jun. 2021",
    endDate: "Present",
    location: "San Francisco, CA",
  },
  {
    organization: "NovaTech Labs",
    role: "Junior Web Developer",
    tasks: [
      "Implemented features for internal tools",
      "Wrote unit and integration tests",
      "Participated in agile sprints and sprint planning",
    ],
    startDate: "Jan. 2019",
    endDate: "May. 2021",
    location: "Austin, TX",
  },
  {
    organization: "PixelCraft Studio",
    role: "Frontend Intern",
    tasks: [
      "Assisted in UI development and prototyping",
      "Performed cross-browser testing and debugging",
      "Fixed accessibility issues and improved ARIA attributes",
    ],
    startDate: "Jun. 2018",
    endDate: "Dec. 2018",
    location: "Remote",
  },
];

export const education = collectify(educationList);
export const experience = collectify(experienceList);
export function createEmptyItem() {
  return {
    id: crypto.randomUUID(),
    organization: "",
    role: "",
    tasks: [],
    startDate: "",
    endDate: "",
    location: "",
  };
}

function collectify(list) {
  const collection = {};
  for (const item of list) {
    const id = crypto.randomUUID();
    collection[id] = { ...item, id };
  }

  return collection;
}
