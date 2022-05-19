import softwareSystems from './data/info/software-systems.js';
import informaticsSystems from './data/info-math/informatics-engineering.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsInfoAndMathinformaticsSystems = [
  new Student('Algirdas', 'A', informaticsSystems.id),
  new Student('Saulius', 'S', informaticsSystems.id),
  new Student('Tadas', 'T', informaticsSystems.id),
  new Student('Rima', 'R', informaticsSystems.id),
  new Student('Rūta', 'R', informaticsSystems.id),
];


