import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { informaticsFaculty } from '../faculties.js';

export const informationTechnologyModules = [];

const informationTechnology = new StudyProgram('Informacinės teschnologijos',informaticsFaculty.id);

const informationTechnologySemester1 = new StudyProgramSemester();
const informationTechnologySemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1 I/II d.', 5)
const informationTechnologySemester1module2 = new Module('Diskrečioji matematika', 5)
const informationTechnologySemester1module3 = new Module('Įvadas į kompiuterių architektūrą',5)
const informationTechnologySemester1module4 = new Module('Matematika informatikams I/III d.',5)
const informationTechnologySemester1module5 = new Module('Programavimo ir IT pagrindai',5)
informationTechnologySemester1.addModule(informationTechnologySemester1module1.id);
informationTechnologySemester1.addModule(informationTechnologySemester1module2.id);
informationTechnologySemester1.addModule(informationTechnologySemester1module3.id);
informationTechnologySemester1.addModule(informationTechnologySemester1module4.id);
informationTechnologySemester1.addModule(informationTechnologySemester1module5.id);

const informationTechnologySemester2 = new StudyProgramSemester();
const informationTechnologySemester2module1 = new Module('Akademinė ir mokslinė anglų kalba C1 II/II d.',5)
const informationTechnologySemester2module2 = new Module('Duomenų struktūros',5)
const informationTechnologySemester2module3 = new Module('Matematika informatikams II/III d.',5)
const informationTechnologySemester2module4 = new Module('Objektinis programavimas',5)
const informationTechnologySemester2module5 = new Module('UNIX operacinės sistemos',5)
const informationTechnologySemester2module6 = new Module('Verslo pagrindai I/II d.',5)

informationTechnologySemester2.addModule(informationTechnologySemester2module1.id);
informationTechnologySemester2.addModule(informationTechnologySemester2module2.id);
informationTechnologySemester2.addModule(informationTechnologySemester2module3.id);
informationTechnologySemester2.addModule(informationTechnologySemester2module4.id);
informationTechnologySemester2.addModule(informationTechnologySemester2module5.id);
informationTechnologySemester2.addModule(informationTechnologySemester2module6.id);

const informationTechnologySemester3 = new StudyProgramSemester();
const informationTechnologySemester3module1 = new Module('Duomenų bazių valdymo sistemos',5)
const informationTechnologySemester3module2 = new Module('Matematika informatikams III/III d.',5)
const informationTechnologySemester3module3 = new Module('Matematinė statistika',5)
const informationTechnologySemester3module4 = new Module('Programų sistemų inžinerija',5)
const informationTechnologySemester3module5 = new Module('Virtualizacijos pagrindai',5)

informationTechnologySemester3.addModule(informationTechnologySemester3module1.id);
informationTechnologySemester3.addModule(informationTechnologySemester3module2.id);
informationTechnologySemester3.addModule(informationTechnologySemester3module3.id);
informationTechnologySemester3.addModule(informationTechnologySemester3module4.id);
informationTechnologySemester3.addModule(informationTechnologySemester3module5.id);

const informationTechnologySemester4 = new StudyProgramSemester();
const informationTechnologySemester4module1 = new Module('Duomenų analizė',5)
const informationTechnologySemester4module2 = new Module('Elektroniniai duomenų tinklai ir duomenų vizualizacija',5)
const informationTechnologySemester4module3 = new Module('Interneto technologijos',5)
const informationTechnologySemester4module4 = new Module('Žmogaus ir kompiuterio sąveika',5)

informationTechnologySemester4.addModule(informationTechnologySemester4module1.id);
informationTechnologySemester4.addModule(informationTechnologySemester4module2.id);
informationTechnologySemester4.addModule(informationTechnologySemester4module3.id);
informationTechnologySemester4.addModule(informationTechnologySemester4module4.id);

const informationTechnologySemester5 = new StudyProgramSemester();
const informationTechnologySemester5module1 = new Module('Kompiuterių tinklai',10)
const informationTechnologySemester5module2 = new Module('Projektų vadyba',5)
const informationTechnologySemester5module3 = new Module('verslo pagrindai',5)

informationTechnologySemester5.addModule(informationTechnologySemester5module1.id);
informationTechnologySemester5.addModule(informationTechnologySemester5module2.id);
informationTechnologySemester5.addModule(informationTechnologySemester5module3.id);

const informationTechnologySemester6 = new StudyProgramSemester();
const informationTechnologySemester6module1 = new Module('Paslaugų vadyba',5)
const informationTechnologySemester6module2 = new Module('Programų sistemų architektūra',5)
const informationTechnologySemester6module3 = new Module('Rinktiniai informacijos saugos skyriai',5)
const informationTechnologySemester6module4 = new Module('Tinklų saugumas',5)

informationTechnologySemester6.addModule(informationTechnologySemester6module1.id);
informationTechnologySemester6.addModule(informationTechnologySemester6module2.id);
informationTechnologySemester6.addModule(informationTechnologySemester6module3.id);
informationTechnologySemester6.addModule(informationTechnologySemester6module4.id);

const informationTechnologySemester7 = new StudyProgramSemester();
const informationTechnologySemester7module1 = new Module('Bakalauro baigiamasis',15)
const informationTechnologySemester7module2 = new Module('Profesinė praktika',15)

informationTechnologySemester7.addModule(informationTechnologySemester7module1.id);
informationTechnologySemester7.addModule(informationTechnologySemester7module2.id);

informationTechnology.addSemester(1, informationTechnologySemester1);
informationTechnology.addSemester(2, informationTechnologySemester2);
informationTechnology.addSemester(3, informationTechnologySemester3);
informationTechnology.addSemester(4, informationTechnologySemester4);
informationTechnology.addSemester(5, informationTechnologySemester5);
informationTechnology.addSemester(6, informationTechnologySemester6);
informationTechnology.addSemester(7, informationTechnologySemester7);

informationTechnologyModules.push(
  informationTechnologySemester1module1,
  informationTechnologySemester1module2,
  informationTechnologySemester1module3,
  informationTechnologySemester1module4,
  informationTechnologySemester1module5,
  informationTechnologySemester2module1,
  informationTechnologySemester2module2,
  informationTechnologySemester2module3,
  informationTechnologySemester2module4,
  informationTechnologySemester2module5,
  informationTechnologySemester2module6,
  informationTechnologySemester3module1,
  informationTechnologySemester3module2,
  informationTechnologySemester3module3,
  informationTechnologySemester3module4,
  informationTechnologySemester3module5,
  informationTechnologySemester4module1,
  informationTechnologySemester4module2,
  informationTechnologySemester4module3,
  informationTechnologySemester4module4,
  informationTechnologySemester5module1,
  informationTechnologySemester5module2,
  informationTechnologySemester5module3,
  informationTechnologySemester6module1,
  informationTechnologySemester6module2,
  informationTechnologySemester6module3,
  informationTechnologySemester6module4,
  informationTechnologySemester7module1,
  informationTechnologySemester7module2,
);

export default informationTechnology;