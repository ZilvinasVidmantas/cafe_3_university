import { softwareSystemsModules } from './info/software-systems.js';
import { pharmacyModules } from './med/pharmacy.js';

const modules = [
  ...softwareSystemsModules,
  ...pharmacy,

];

export default modules;
