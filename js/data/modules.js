import { economicsAndBusinessModules } from './eco/business-law.js';
import { nanoChemistryModules } from './chem/nano-chemistry.js';
import { odontologyModules } from './med/odontology.js';
import { biochemistryModules } from './chem/biochemistry.js';
import { meteorologyAndHidrologyModules } from './chem/meteorology-hidrology.js';
import { nursingProgramModules } from './med/nursing.js';
import { medicinesModules } from './mmedicine/medicine.js';


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
  ...medicinesModules,
];

export default modules;
