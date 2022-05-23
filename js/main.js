import softwareSystems from './data/info/software-systems.js';
import economicsFinance from './data/eco/economics-finance.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsEconomicsFinance =[
  new Student('Kazimira Danutė' , 'Prunskienė', economicsFinance.id ),
  new Student('Algirdas Mykolas' , 'Brazauskas', economicsFinance.id ),
  new Student('Česlovas' , 'Juršėnas', economicsFinance.id ),
  new Student('Rolandas' , 'Paksas', economicsFinance.id ),
  new Student('Irena' , 'Degutienė', economicsFinance.id ),
]

console.table(studentsEconomicsFinance);

