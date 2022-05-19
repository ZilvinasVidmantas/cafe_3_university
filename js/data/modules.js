import { softwareSystemsModules } from './info/software-systems.js';
import { medicinesModules } from '../mmedicine/medicine.js';

const modules = [
  ...softwareSystemsModules,
  ...medicinesModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;