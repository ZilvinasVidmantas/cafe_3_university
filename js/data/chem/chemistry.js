import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { chemistryAndGeoSciencesFaculty } from '../faculties.js';

const chemistry = new StudyProgram('Chemija', chemistryAndGeoSciencesFaculty.id);

const chemistrySemester1 = new StudyProgramSemester();
const chemistrySemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1', 5);
const chemistrySemester1module2 = new Module('Bendroji chemija', 10);
const chemistrySemester1module3 = new Module('Matematika I/II d.', 10);
const chemistrySemester1module4 = new Module('Studijų įvadas', 5);
chemistrySemester1.addModule(chemistrySemester1module1.id);
chemistrySemester1.addModule(chemistrySemester1module2.id);
chemistrySemester1.addModule(chemistrySemester1module3.id);
chemistrySemester1.addModule(chemistrySemester1module4.id);

const chemistrySemester2 = new StudyProgramSemester();
const chemistrySemester2module1 = new Module('Analizinė chemija I/II d.', 10);
const chemistrySemester2module2 = new Module('Fizika I/II d.', 10);
const chemistrySemester2module3 = new Module('Matematika II/II d.', 10);
chemistrySemester2.addModule(chemistrySemester2module1.id);
chemistrySemester2.addModule(chemistrySemester2module2.id);
chemistrySemester2.addModule(chemistrySemester2module3.id);

const chemistrySemester3 = new StudyProgramSemester();
const chemistrySemester3module1 = new Module('Fizika II/II d.', 5);
const chemistrySemester3module2 = new Module('Kvantinė chemija', 10);
const chemistrySemester3module3 = new Module('Organinė chemija I/II d.', 10);
const chemistrySemester3module4 = new Module('Programavimo ir duomenų analizės įvadas', 5);
chemistrySemester3.addModule(chemistrySemester3module1.id);
chemistrySemester3.addModule(chemistrySemester3module2.id);
chemistrySemester3.addModule(chemistrySemester3module3.id);
chemistrySemester3.addModule(chemistrySemester3module4.id);

const chemistrySemester4 = new StudyProgramSemester();
const chemistrySemester4module1 = new Module('Fizikinė chemija I/II d.', 10);
const chemistrySemester4module2 = new Module('Organinė chemija II/II d.', 10);
const chemistrySemester4module3 = new Module('Pagrindinių grupių elementų chemija', 10);
chemistrySemester4.addModule(chemistrySemester4module1.id);
chemistrySemester4.addModule(chemistrySemester4module2.id);
chemistrySemester4.addModule(chemistrySemester4module3.id);

const chemistrySemester5 = new StudyProgramSemester();
const chemistrySemester5module1 = new Module('Analizinė chemija II/II d.', 10);
const chemistrySemester5module2 = new Module('Biochemija', 5);
const chemistrySemester5module3 = new Module('Fizikinė chemija II/II d.', 10);
const chemistrySemester5module4 = new Module('Kristalų chemija', 5);
chemistrySemester5.addModule(chemistrySemester5module1.id);
chemistrySemester5.addModule(chemistrySemester5module2.id);
chemistrySemester5.addModule(chemistrySemester5module3.id);
chemistrySemester5.addModule(chemistrySemester5module4.id);

const chemistrySemester6 = new StudyProgramSemester();
const chemistrySemester6module1 = new Module('Koloidų chemija', 5);
const chemistrySemester6module2 = new Module('Neorganinė chemija', 10);
const chemistrySemester6module3 = new Module('Polimerų chemija', 10);
const chemistrySemester6module4 = new Module('Spektroskopija', 5);
chemistrySemester6.addModule(chemistrySemester6module1.id);
chemistrySemester6.addModule(chemistrySemester6module2.id);
chemistrySemester6.addModule(chemistrySemester6module3.id);
chemistrySemester6.addModule(chemistrySemester6module4.id);

const chemistrySemester7 = new StudyProgramSemester();
const chemistrySemester7module1 = new Module('Baigiamojo darbo projektas', 10);
const chemistrySemester7module2 = new Module('Cheminė technologija', 5);
const chemistrySemester7module3 = new Module('Profesinė praktika', 15);
chemistrySemester7.addModule(chemistrySemester7module1.id);
chemistrySemester7.addModule(chemistrySemester7module2.id);
chemistrySemester7.addModule(chemistrySemester7module3.id);

const chemistrySemester8 = new StudyProgramSemester();
const chemistrySemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: chemija)', 30);
chemistrySemester8.addModule(chemistrySemester8module1.id);

chemistry.addSemester(1, chemistrySemester1);
chemistry.addSemester(2, chemistrySemester2);
chemistry.addSemester(3, chemistrySemester3);
chemistry.addSemester(4, chemistrySemester4);
chemistry.addSemester(5, chemistrySemester5);
chemistry.addSemester(6, chemistrySemester6);
chemistry.addSemester(7, chemistrySemester7);
chemistry.addSemester(8, chemistrySemester8);

export const chemistryModules = [
  chemistrySemester1module1,
  chemistrySemester1module2,
  chemistrySemester1module3,
  chemistrySemester1module4,
  chemistrySemester2module1,
  chemistrySemester2module2,
  chemistrySemester2module3,
  chemistrySemester3module1,
  chemistrySemester3module2,
  chemistrySemester3module3,
  chemistrySemester3module4,
  chemistrySemester4module1,
  chemistrySemester4module2,
  chemistrySemester4module3,
  chemistrySemester5module1,
  chemistrySemester5module2,
  chemistrySemester5module3,
  chemistrySemester5module4,
  chemistrySemester6module1,
  chemistrySemester6module2,
  chemistrySemester6module3,
  chemistrySemester6module4,
  chemistrySemester7module1,
  chemistrySemester7module2,
  chemistrySemester7module3,
  chemistrySemester8module1,
];

export default chemistry;
