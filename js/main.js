import softwareSystems from './data/info-math/software-systems.js';
import nursingProgram from './data/med/nursing.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsInfoNursingProgram = [
  new Student('Helga', 'Niursaitė', nursingProgram.id),
  new Student('Denera', 'Bintytė', nursingProgram.id),
  new Student('Florencija', 'Heterman', nursingProgram.id),
  new Student('Liuteris', 'Solomonas', nursingProgram.id),
  new Student('Voltas', 'Traidenis', nursingProgram.id),
];
