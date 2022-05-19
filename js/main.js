import softwareSystems from './data/info/software-systems.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsChemBiochemistry = [
  new Student('Lina', 'Lentautaitė', biochemistry.id),
  new Student('Jurgis', 'Jurgauskas', biochemistry.id),
  new Student('Janina', 'Jantlikaitė', biochemistry.id),
  new Student('Eliza', 'Kvakauskaitė', biochemistry.id),
  new Student('Ernestas', 'Nevermaidis', biochemistry.id),
];


