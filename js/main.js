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

const studentsBioinformatics = [
  new Student('Liepa', 'Liepaitė', bioinformatics.id),
  new Student('Rasa', 'Rasaitė', bioinformatics.id),
  new Student('Jonas', 'Smitas', bioinformatics.id),
  new Student('Regimantas', 'Regis', bioinformatics.id),
  new Student('Montvydas', 'Montvis', bioinformatics.id)
]

