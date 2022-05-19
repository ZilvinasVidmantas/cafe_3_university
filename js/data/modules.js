import { softwareSystemsModules } from './info/software-systems.js';
import { dataScienceModules } from './info/data-science.js';

const modules = [
  ...softwareSystemsModules,
  ...dataScienceModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;