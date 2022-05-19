import { softwareSystemsModules } from './info/software-systems.js';
import { meteorologyAndHidrologyModules } from './chem/meteorology-hidrology.js';

const modules = [
  ...softwareSystemsModules,
  ...meteorologyAndHidrologyModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;