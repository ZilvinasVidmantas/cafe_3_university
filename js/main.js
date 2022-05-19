import softwareSystems from './data/info/software-systems.js';
import medicine from './data/med/medicine.js';
import softwareSystems from './data/med/medicine.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsMedicine = [
  new Student('Paulius', 'Kontauskas', medicine.id),
  new Student('Petras', 'Ivanauskas', medicine.id),
  new Student('Robertas', 'Pubsauskas', medicine.id),
  new Student('Jonas', 'Romaitis', medicine.id),
  new Student('Petraitis', 'Jonaitytis', medicine.id),
];


