import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { infoAndMathFaculty } from '../faculties.js';

const bioinformatics = new StudyProgram('Programų sistemos', infoAndMathFaculty.id);

const bioinformaticsSemester1 = new StudyProgramSemester();
const bioinformaticsSemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1 I/II d.', 5);
const bioinformaticsSemester1module2 = new Module('Bendroji biologija', 5);
const bioinformaticsSemester1module3 = new Module('Programavimo ir IT pagrindai', 5);
const bioinformaticsSemester1module4 = new Module('Fizikinė chemija', 5);
const bioinformaticsSemester1module5 = new Module('Matematinė analizė I/II d.', 5);
const bioinformaticsSemester1module6 = new Module('Diskrečiosios struktūros', 5);
bioinformaticsSemester1.addModule(bioinformaticsSemester1module1.id);
bioinformaticsSemester1.addModule(bioinformaticsSemester1module2.id);
bioinformaticsSemester1.addModule(bioinformaticsSemester1module3.id);
bioinformaticsSemester1.addModule(bioinformaticsSemester1module4.id);
bioinformaticsSemester1.addModule(bioinformaticsSemester1module5.id);
bioinformaticsSemester1.addModule(bioinformaticsSemester1module6.id);

const bioinformaticsSemester2 = new StudyProgramSemester();
const bioinformaticsSemester2module1 = new Module('Akademinė ir mokslinė anglų kalba C1 II/II d.', 5);
const bioinformaticsSemester2module2 = new Module('Tiesinė algebra ir geometrija', 5);
const bioinformaticsSemester2module3 = new Module('Biochemija', 10);
const bioinformaticsSemester2module4 = new Module('Matematinė analizė II/II d.', 5);
const bioinformaticsSemester2module5 = new Module('Objektinis programavimas C++', 5);
bioinformaticsSemester2.addModule(bioinformaticsSemester2module1.id);
bioinformaticsSemester2.addModule(bioinformaticsSemester2module2.id);
bioinformaticsSemester2.addModule(bioinformaticsSemester2module3.id);
bioinformaticsSemester2.addModule(bioinformaticsSemester2module4.id);
bioinformaticsSemester2.addModule(bioinformaticsSemester2module5.id);

const bioinformaticsSemester3 = new StudyProgramSemester();
const bioinformaticsSemester3module1 = new Module('Diskretus optimizavimas', 10);
const bioinformaticsSemester3module2 = new Module('Genetika', 5);
const bioinformaticsSemester3module3 = new Module('Kompiuterių architektūra', 5);
const bioinformaticsSemester3module4 = new Module('Objektinis programavimas JAVA', 10);
const bioinformaticsSemester3module5 = new Module('Molekulinė biologija', 10);
bioinformaticsSemester3.addModule(bioinformaticsSemester3module1.id);
bioinformaticsSemester3.addModule(bioinformaticsSemester3module2.id);
bioinformaticsSemester3.addModule(bioinformaticsSemester3module3.id);
bioinformaticsSemester3.addModule(bioinformaticsSemester3module4.id);
bioinformaticsSemester3.addModule(bioinformaticsSemester3module5.id);

const bioinformaticsSemester4 = new StudyProgramSemester();
const bioinformaticsSemester4module1 = new Module('Algoritmai ir duomenų struktūros', 5);
const bioinformaticsSemester4module2 = new Module('Bioinformatika I/IV d.', 10);
const bioinformaticsSemester4module3 = new Module('Biologinių sistemų teorija', 5);
const bioinformaticsSemester4module4 = new Module('Ląstelės biologija', 5);
const bioinformaticsSemester4module5 = new Module('Tikimybių teorija ir matematinė statistika', 5);
bioinformaticsSemester4.addModule(bioinformaticsSemester4module1.id);
bioinformaticsSemester4.addModule(bioinformaticsSemester4module2.id);
bioinformaticsSemester4.addModule(bioinformaticsSemester4module3.id);
bioinformaticsSemester4.addModule(bioinformaticsSemester4module4.id);
bioinformaticsSemester4.addModule(bioinformaticsSemester4module5.id);

const bioinformaticsSemester5 = new StudyProgramSemester();
const bioinformaticsSemester5module1 = new Module('Bioinformatika II/IV d.', 5);
const bioinformaticsSemester5module2 = new Module('Biometrija', 5);
const bioinformaticsSemester5module3 = new Module('Interneto technologijos', 5);
const bioinformaticsSemester5module4 = new Module('Programavimo metodikos pagrindai', 5);
bioinformaticsSemester5.addModule(bioinformaticsSemester5module1.id);
bioinformaticsSemester5.addModule(bioinformaticsSemester5module2.id);
bioinformaticsSemester5.addModule(bioinformaticsSemester5module3.id);
bioinformaticsSemester5.addModule(bioinformaticsSemester5module4.id);

const bioinformaticsSemester6 = new StudyProgramSemester();
const bioinformaticsSemester6module1 = new Module('Bioinformatika III/IV d.', 5);
const bioinformaticsSemester6module2 = new Module('Biomedicinos duomenų analizė', 5);
const bioinformaticsSemester6module3 = new Module('Duomenų bazių valdymo sistemos', 5);
const bioinformaticsSemester6module4 = new Module('Kompiuterių tinklai', 5);
const bioinformaticsSemester6module5 = new Module('Kursinis darbas', 5);
bioinformaticsSemester6.addModule(bioinformaticsSemester6module1.id);
bioinformaticsSemester6.addModule(bioinformaticsSemester6module2.id);
bioinformaticsSemester6.addModule(bioinformaticsSemester6module3.id);
bioinformaticsSemester6.addModule(bioinformaticsSemester6module4.id);
bioinformaticsSemester6.addModule(bioinformaticsSemester6module5.id);

const bioinformaticsSemester7 = new StudyProgramSemester();
const bioinformaticsSemester7module1 = new Module('Bioinformatika IV/IV d.', 5);
const bioinformaticsSemester7module2 = new Module('Duomenų tyrimas', 5);
const bioinformaticsSemester7module3 = new Module('Informacija ir kodavimas', 5);
const bioinformaticsSemester7module4 = new Module('Kursinio darbo projektas', 5);
const bioinformaticsSemester7module5 = new Module('Programų sistemų inžinerija', 5);
bioinformaticsSemester7.addModule(bioinformaticsSemester7module1.id);
bioinformaticsSemester7.addModule(bioinformaticsSemester7module2.id);
bioinformaticsSemester7.addModule(bioinformaticsSemester7module3.id);
bioinformaticsSemester7.addModule(bioinformaticsSemester7module4.id);
bioinformaticsSemester7.addModule(bioinformaticsSemester7module5.id);

const bioinformaticsSemester8 = new StudyProgramSemester();
const bioinformaticsSemester8module1 = new Module('Bakalauro baigiamasis darbas', 15);
const bioinformaticsSemester8module2 = new Module('Profesinė praktika', 15);
bioinformaticsSemester8.addModule(bioinformaticsSemester8module1.id);
bioinformaticsSemester8.addModule(bioinformaticsSemester8module2.id);

bioinformatics.addSemester(1, bioinformaticsSemester1);
bioinformatics.addSemester(2, bioinformaticsSemester2);
bioinformatics.addSemester(3, bioinformaticsSemester3);
bioinformatics.addSemester(4, bioinformaticsSemester4);
bioinformatics.addSemester(5, bioinformaticsSemester5);
bioinformatics.addSemester(6, bioinformaticsSemester6);
bioinformatics.addSemester(7, bioinformaticsSemester7);
bioinformatics.addSemester(8, bioinformaticsSemester8);

export const bioinformaticsModules = [
  bioinformaticsSemester1module1,
  bioinformaticsSemester1module2,
  bioinformaticsSemester1module3,
  bioinformaticsSemester1module4,
  bioinformaticsSemester1module5,
  bioinformaticsSemester1module6,
  bioinformaticsSemester2module1,
  bioinformaticsSemester2module2,
  bioinformaticsSemester2module3,
  bioinformaticsSemester2module4,
  bioinformaticsSemester2module5,
  bioinformaticsSemester3module1,
  bioinformaticsSemester3module2,
  bioinformaticsSemester3module3,
  bioinformaticsSemester3module4,
  bioinformaticsSemester3module5,
  bioinformaticsSemester4module1,
  bioinformaticsSemester4module2,
  bioinformaticsSemester4module3,
  bioinformaticsSemester4module4,
  bioinformaticsSemester4module5,
  bioinformaticsSemester5module1,
  bioinformaticsSemester5module2,
  bioinformaticsSemester5module3,
  bioinformaticsSemester5module4,
  bioinformaticsSemester6module1,
  bioinformaticsSemester6module2,
  bioinformaticsSemester6module3,
  bioinformaticsSemester6module4,
  bioinformaticsSemester6module5,
  bioinformaticsSemester7module1,
  bioinformaticsSemester7module2,
  bioinformaticsSemester7module3,
  bioinformaticsSemester7module4,
  bioinformaticsSemester7module5,
  bioinformaticsSemester8module1,
  bioinformaticsSemester8module2,  
];

export default bioinformatics;
