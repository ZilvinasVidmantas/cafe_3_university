import { softwareSystemsModules } from './info/software-systems.js';
import { mathematicsAndItsApplications } from './info-math/mathematicsAndItsApplications.js';

const modules = [
  ...softwareSystemsModules,
  ...mathematicsAndItsApplications,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;