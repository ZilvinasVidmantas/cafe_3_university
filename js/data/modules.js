import { softwareSystemsModules } from './info/software-systems.js';
import { informaticsSystemsModules } from './info-math/informatics-engineering.js';

const modules = [
  ...softwareSystemsModules,
  ...informaticsSystemsModules
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;