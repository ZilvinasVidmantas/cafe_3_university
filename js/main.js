import softwareSystems from './data/info/software-systems.js';
import managementEnglish from './data/eco/management-english.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsManagementEnglis = [
  new Student('Lina', 'Pakalnyte', managementEnglish.id),
  new Student('Ona', 'Onyskaite', managementEnglish.id),
  new Student('Benas', 'Benauskass', managementEnglish.id),
  new Student('Pavelas', 'Ivanauskas', managementEnglish.id),
  new Student('Julija', 'Julienė', managementEnglish.id),
]

console.log(studentsManagementEnglis);



