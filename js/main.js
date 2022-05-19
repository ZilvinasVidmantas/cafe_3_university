import softwareSystems from './data/info/software-systems.js';
import meteorologyAndHidrology from './data/chem/meteorology-hidrology.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

const studentsChemMeteorologyAndHidrology = [
  new Student('Nemunas', 'Panemunis', meteorologyAndHidrology.id),
  new Student('Ieva', 'Drebulaitė', meteorologyAndHidrology.id),
  new Student('Zosė', 'Kalnienė', meteorologyAndHidrology.id),
  new Student('Antosė', 'Draugytė', meteorologyAndHidrology.id),
  new Student('Perkūnas', 'Plonulis', meteorologyAndHidrology.id),
];


