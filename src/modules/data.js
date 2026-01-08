import { v4 as uuidv4 } from 'uuid';

export const contact = {
  author: "Ava Stardust",
  email: "ava@stardust.io",
  phone: "+99 7777 0000 111",
  website: "https://stardustverse.example",
};

const educationList = [
  {
    organization: "Orion Academy of Algorithms",
    role: "B.Sc. in Arcane Systems",
    startDate: "Sep. 2030",
    endDate: "Jun. 2034",
    location: "New Atlantis",
  },
  // {
  //   organization: "Lunar Institute of Applied Phantasmics",
  //   role: "M.Sc. in Temporal Interfaces",
  //   startDate: "Sep. 2035",
  //   endDate: "Oct. 2037",
  //   location: "Luna Colony",
  // },
];

export const experienceList = [
  {
    organization: "Nebula Forge",
    role: "Lead Holographic Interface Engineer",
    tasks: [
      "Designed holographic interfaces for wearable displays",
      "Built a gesture-driven UI layer for orbital collaboration",
      "Optimized render pipelines for zero-latency feedback",
    ],
    startDate: "Jun. 2040",
    endDate: "Present",
    location: "Orbital Station Eos",
  },
  {
    organization: "Quantum Quill",
    role: "Senior Timeflow Developer",
    tasks: [
      "Implemented predictive syncing for asynchronous timelines",
      "Wrote integration tests for chronal data replication",
      "Collaborated with research team to prototype time-safe APIs",
    ],
    startDate: "Jan. 2038",
    endDate: "May. 2040",
    location: "Neo Arcadia",
  },
  // {
  //   organization: "Lumen Labs",
  //   role: "Holography Intern",
  //   tasks: [
  //     "Assisted in rapid prototyping of light-field components",
  //     "Conducted cross-environment compatibility testing",
  //     "Documented accessibility improvements for holo-displays",
  //   ],
  //   startDate: "Jun. 2037",
  //   endDate: "Dec. 2037",
  //   location: "Remote",
  // },
];

export const education = collectify(educationList);
export const experience = collectify(experienceList);
export function createEmptyItem() {
  return {
    id: uuidv4(),
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
    const id = uuidv4();
    collection[id] = { ...item, id };
  }

  return collection;
}
