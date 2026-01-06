export const general = {
  name: "John Smith",
  email: "john@smith.com",
  phone: "+44 3245 5521 5521",
  website: "https://john.smith.com",
};

const educationList = [
  {
    institution: "State University of Westford",
    title: "B.Sc. in Computer Science",
    startDate: "Sep. 2012",
    endDate: "Sep. 2016",
    location: "Westford, MA",
  },
  {
    institution: "Westford Institute of Technology",
    title: "M.Sc. in Software Engineering",
    startDate: "Sep. 2016",
    endDate: "Oct. 2018",
    location: "Rivertown, CA",
  },
];

export const experienceList = [
  {
    company: "BrightByte Solutions",
    position: "Frontend Developer",
    responsibilities:
      "Built responsive React applications, improved performance, and mentored junior developers.",
    startDate: "Jun. 2021",
    endDate: "Present",
    location: "San Francisco, CA",
  },
  {
    company: "NovaTech Labs",
    position: "Junior Web Developer",
    responsibilities:
      "Implemented features for internal tools, wrote unit tests, and participated in agile sprints.",
    startDate: "Jan. 2019",
    endDate: "May. 2021",
    location: "Austin, TX",
  },
  {
    company: "PixelCraft Studio",
    position: "Frontend Intern",
    responsibilities:
      "Assisted in UI development, performed cross-browser testing, and fixed accessibility issues.",
    startDate: "Jun. 2018",
    endDate: "Dec. 2018",
    location: "Remote",
  },
];

export const education = collectify(educationList);
export const experience = collectify(experienceList);
export const templates = {
  education: {
    institution: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
  },
  experience: {
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
    location: "",
  },
};

function collectify(list) {
  const collection = {};
  for (const item of list) {
    const id = crypto.randomUUID();
    collection[id] = { ...item, id };
  }

  return collection;
}
