import softwareSystems from './data/info/software-systems.js';
import softwareSystems from './data/medicine/medicine.js';
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
  new Student('Paulius', 'Kontauskas', modules.id),
  new Student('Petras', 'Ivanauskas', modules.id),
  new Student('Robertas', 'Pubsauskas', modules.id),
  new Student('Jonas', 'Romaitis', modules.id),
  new Student('Petraitis', 'Jonaitytis', modules.id),
];


