import softwareSystems from './data/info/software-systems.js';
import modules from './data/modules.js'
import Student from './entities/student.js';
import odontology from './data/med/odontology.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsOdontology = [
  new Student('Hari', 'Krisna', odontology.id),
  new Student('Maiklas', 'Dziordonas', odontology.id),
  new Student('Vardenis','Pavardenis', odontology.id),
  new Student('Agrastas', 'Kaspinuotis', odontology.id),
  new Student('Jageris', 'Maisteris', odontology.id),
]

