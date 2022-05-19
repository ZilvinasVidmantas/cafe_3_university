import { bioinformaticsModules } from './info-math/bioinformatics.js';
import { softwareSystemsModules } from './info/software-systems.js';

const modules = [
  ...softwareSystemsModules,
  ...bioinformaticsModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;