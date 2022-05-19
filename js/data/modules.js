import { softwareSystemsModules } from './info/software-systems.js';
import { odontologyModules } from './med/odontology.js';

const modules = [
  ...softwareSystemsModules,
  ...odontologyModules,
  // ...softwareSystemsModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;