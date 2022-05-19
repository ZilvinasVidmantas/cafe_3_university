import softwareSystems from './data/info/software-systems.js';
import philosophy from './data/philo/philosophy.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const philosophyStudents = [
  new Student('Antanas', 'Benzinas', philosophy.id),
  new Student('Betonas', 'Kietas', philosophy.id),
  new Student('Tomas', 'Tomauskas', philosophy.id),
  new Student('Gertrūda', 'Pavardenytė', philosophy.id),
  new Student('Vyšnia', 'Bordiūrytė', philosophy.id),
]

console.log(philosophyStudents)

