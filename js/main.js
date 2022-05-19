import softwareSystems from './data/info/software-systems.js';
import pharmacy from './data/med/pharmacy.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsMedPharmacy = [
  new Student('Medikas', 'Medikaitis', pharmacy.id),
  new Student('Švirkštas', 'Klizmauskas', pharmacy.id),
  new Student('Lašelinė', 'Adatienė', pharmacy.id),
  new Student('Kateteris', 'Lancetauskas', pharmacy.id),
  new Student('Analizė', 'Kraujauskė', pharmacy.id),
];