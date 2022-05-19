import { softwareSystemsModules } from './info/software-systems.js';
import { dataScienceModules } from './info/data-science.js';
import { economicsAndBusinessModules } from "./economics-business/business-law.js";

const modules = [
  ...softwareSystemsModules,
  ...dataScienceModules,
  ...economicsAndBusinessModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;
