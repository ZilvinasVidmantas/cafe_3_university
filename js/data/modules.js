import { softwareSystemsModules } from './info/software-systems.js';
import {managementEnglish} from './eco/management-english.js';
import { studyPrograms } from './eco/management-english.js';
import { modules } from './eco/management-english.js';

const modules = [
  ...softwareSystemsModules,
  ...managementEnglishModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
];

export default modules;