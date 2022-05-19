import { softwareSystemsModules } from './info/software-systems.js';
import { nursingProgramModules } from './med/nursing.js';


const modules = [
  ...softwareSystemsModules,
  ...nursingProgramModules,
  // ...softwareSystemsModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;