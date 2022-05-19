import softwareSystems from './data/info-math/software-systems.js';
import occupationalTherapy from './data/med/occupational-therapy.js';
import modules from './entities/module.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsOccupationalTherapy = [
  new Student('Antanas', 'Antanaitis', occupationalTherapy.id),
  new Student('Virgis', 'Virgilaitis', occupationalTherapy.id),
  new Student('Jonas', 'Jonaitis', occupationalTherapy.id),
  new Student('Pijus', 'Pijauskas', occupationalTherapy.id),
  new Student('Vidas', 'Vidaitis', occupationalTherapy.id),
];


