import Student from "./entities/student.js";
import softwareSystems from "./data/info/software-systems.js";
import businessAndLaw from "./data/economics-business/business-law.js";
import modules from "./data/modules.js";

import softwareSystems from './data/info-math/software-systems.js';
import Student from './entities/student.js';

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
