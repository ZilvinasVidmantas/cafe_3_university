<<<<<<< HEAD
import { softwareSystemsModules } from './info/software-systems.js';
import { medicinesModules } from './mmedicine/medicine.js';

const modules = [
  ...softwareSystemsModules,
  ...medicinesModules,
  // ...lawModules,
  // ...biologyModules,
  // ...chemistryModules,
=======
import { softwareSystemsModules } from './info-math/software-systems.js';
import { mathematicsAndItsApplicationsModules } from './info-math/mathematics-and-its-applications.js';
import { dataScienceModules } from './info-math/data-science.js';
import { economicsAndBusinessModules } from "./eco/business-law.js";
import { nanoChemistryModules} from './chem/nano-chemistry.js';

  const modules = [
    ...softwareSystemsModules,
    ...dataScienceModules,
    ...economicsAndBusinessModules,
    ...mathematicsAndItsApplicationsModules,
    ...nanoChemistryModules,
>>>>>>> master
];

export default modules;
