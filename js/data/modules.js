import { softwareSystemsModules } from './info-math/software-systems.js';
import { mathematicsAndItsApplicationsModules } from './info-math/mathematics-and-its-applications.js';
import { dataScienceModules } from './info-math/data-science.js';
import { economicsAndBusinessModules } from './eco/business-law.js';
import { nanoChemistryModules } from './chem/nano-chemistry.js';
import { odontologyModules } from './med/odontology.js';
import { biochemistryModules } from './chem/biochemistry.js';
import { meteorologyAndHidrologyModules } from './chem/meteorology-hidrology.js';
import { nursingProgramModules } from './med/nursing.js';
import { pharmacyModules } from './med/pharmacy.js';

const modules = [
  ...softwareSystemsModules,
  ...mathematicsAndItsApplicationsModules,
  ...dataScienceModules,
  ...economicsAndBusinessModules,
  ...nanoChemistryModules,
  ...odontologyModules,
  ...biochemistryModules,
  ...meteorologyAndHidrologyModules,
  ...nursingProgramModules,  
  ...pharmacy,
];

export default modules;
