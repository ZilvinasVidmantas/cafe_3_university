import { softwareSystemsModules } from './info/software-systems.js';
import pharmacy, { pharmacyModules } from './med/pharmacy.js';

const modules = [
  ...softwareSystemsModules,
  ...pharmacy,

];

export default modules;