import mathematicsAndItsApplications from './data/info-math/software-systems.js';
import Student from "./entities/student.js";
import softwareSystems from "./data/info/software-systems.js";
import businessAndLaw from "./data/economics-business/business-law.js";
import dataScience from './data/info/data-science.js';

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
