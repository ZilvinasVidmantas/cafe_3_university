import { softwareSystemsModules } from './info/software-systems.js';
import { biochemistryModules } from './info/biochemistry.js';

const modules = [
  ...softwareSystemsModules,
  ...biochemistryModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;