import { softwareSystemsModules } from './info-math/software-systems.js';
import { mathematicsAndItsApplicationsModules } from './info-math/mathematics-and-its-applications.js';
import { dataScienceModules } from './info-math/data-science.js';
import { economicsAndBusinessModules } from "./eco/business-law.js";
import { informaticsSystemsModules } from './info-math/informatics-engineering.js';

const modules = [
  ...softwareSystemsModules,
  ...dataScienceModules,
  ...economicsAndBusinessModules,
  ...mathematicsAndItsApplicationsModules,
  ...informaticsSystemsModules
];

export default modules;
