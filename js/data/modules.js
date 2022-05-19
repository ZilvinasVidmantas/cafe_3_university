import { softwareSystemsModules } from './info/software-systems.js';
import { nanoChemistryModules} from './chem/nano-chemistry.js';

const modules = [
  ...softwareSystemsModules,
  ...nanoChemistryModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;