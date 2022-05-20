import Student from "./entities/student.js";
import softwareSystems from "./data/info-math/software-systems.js";
import dataScience from './data/info-math/data-science.js';
import mathematicsAndItsApplications from './data/info-math/mathematics-and-its-applications.js';
import businessAndLaw from "./data/eco/business-law.js";
import nanoChemistry from './data/chem/nano-chemistry.js';
import informaticsSystems from './data/info-math/informatics-engineering.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student("Apsas", "Rekvestenis", softwareSystems.id),
  new Student("Skaitiklis", "Pliusauskas", softwareSystems.id),
  new Student("Bekas", "Serversaidas", softwareSystems.id),
  new Student("Frontas", "Klijentauskas", softwareSystems.id),
  new Student("Kompiuterė", "Komplailerytė", softwareSystems.id),
];
const studentsInfoAndMathBusinessAndLaw = [
  new Student("Jonas", "Jonaitelis", businessAndLaw.id),
  new Student("Lukas", "Liokaitis", businessAndLaw.id),
  new Student("Benas", "Servetcius", businessAndLaw.id),
  new Student("Lakunas", "Kopustunas", businessAndLaw.id),
  new Student("Gintaras", "Ziba", businessAndLaw.id),
];
const studentsInfoAndMathDataScience = [
  new Student('Lina', 'Linaitė', dataScience.id),
  new Student('Asta', 'Astaitė', dataScience.id),
  new Student('Rokas', 'Rokaitis', dataScience.id),
  new Student('Lukas', 'Lukaitis', dataScience.id),
  new Student('Jonas', 'Jonaitis', dataScience.id),
];
const studentsInfoMathematicsAndItsApplications = [
  new Student('Toushaing', 'Dluqum', mathematicsAndItsApplications.id),
  new Student('Esoo', 'Prupia', mathematicsAndItsApplications.id),
  new Student('Dha', 'Adeed', mathematicsAndItsApplications.id),
  new Student('Caxeo', 'Pruvondun', mathematicsAndItsApplications.id),
  new Student('Hawan', 'Baintai', mathematicsAndItsApplications.id),
];
const studentsChemNanoChemistry = [
  new Student('Tomas', 'Ratkauskas', nanoChemistry.id),
  new Student('Ponas', 'BMWas', nanoChemistry.id),
  new Student('Opelis', 'Servisas', nanoChemistry.id),
  new Student('Audi', 'Spaudi', nanoChemistry.id),
  new Student('Voltas', 'Voldemortas', nanoChemistry.id),
];
const studentsInfoAndMathinformaticsSystems = [
  new Student('Algirdas', 'A', informaticsSystems.id),
  new Student('Saulius', 'S', informaticsSystems.id),
  new Student('Tadas', 'T', informaticsSystems.id),
  new Student('Rima', 'R', informaticsSystems.id),
  new Student('Rūta', 'R', informaticsSystems.id),
];

console.table(studentsInfoAndMathSoftwareSystems);
console.table(studentsInfoAndMathBusinessAndLaw);
console.table(studentsInfoAndMathDataScience);
console.table(studentsInfoMathematicsAndItsApplications);
console.table(studentsChemNanoChemistry);
console.table(studentsInfoAndMathinformaticsSystems);
