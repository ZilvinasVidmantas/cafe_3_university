import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { infoAndMathFaculty } from '../faculties.js';

const informatics = new StudyProgram('Informatika', infoAndMathFaculty.id);

const informaticsSemester1 = new StudyProgramSemester();
const informaticsSemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1 I/II d.', 5);
const informaticsSemester1module2 = new Module('Algebra ir geometrija I/II d.', 5);
const informaticsSemester1module3 = new Module('Diskrečioji matematika', 5);
const informaticsSemester1module4 = new Module('Matematinė analizė I/II d.', 5);
const informaticsSemester1module5 = new Module('Praktinė informatika', 5);
const informaticsSemester1module6 = new Module('Programavimo pagrindai', 5);
informaticsSemester1.addModule(informaticsSemester1module1.id);
informaticsSemester1.addModule(informaticsSemester1module2.id);
informaticsSemester1.addModule(informaticsSemester1module3.id);
informaticsSemester1.addModule(informaticsSemester1module4.id);
informaticsSemester1.addModule(informaticsSemester1module5.id);
informaticsSemester1.addModule(informaticsSemester1module6.id);

const informaticsSemester2 = new StudyProgramSemester();
const informaticsSemester2module1 = new Module('Akademinė ir mokslinė anglų kalba C1 II/II d.', 5);
const informaticsSemester2module2 = new Module('Algebra ir geometrija II/II d.', 5);
const informaticsSemester2module3 = new Module('Duomenų struktūros ir algoritmai', 5);
const informaticsSemester2module4 = new Module('Kombinatorika ir grafų teorija', 5);
const informaticsSemester2module5 = new Module('Matematinė analizė II/II d.', 5);
const informaticsSemester2module6 = new Module('Objektinis programavimas C++', 5);
informaticsSemester2.addModule(informaticsSemester2module1.id);
informaticsSemester2.addModule(informaticsSemester2module2.id);
informaticsSemester2.addModule(informaticsSemester2module3.id);
informaticsSemester2.addModule(informaticsSemester2module4.id);
informaticsSemester2.addModule(informaticsSemester2module5.id);
informaticsSemester2.addModule(informaticsSemester2module6.id);

const informaticsSemester3 = new StudyProgramSemester();
const informaticsSemester3module1 = new Module('Algoritmų teorija', 5);
const informaticsSemester3module2 = new Module('Informatikos teisė', 5);
const informaticsSemester3module3 = new Module('Kompiuterių architektūra', 5);
const informaticsSemester3module4 = new Module('Matematinio modeliavimo pagrindai', 5);
const informaticsSemester3module5 = new Module('Objektinis programavimas JAVA', 5);
informaticsSemester3.addModule(informaticsSemester3module1.id);
informaticsSemester3.addModule(informaticsSemester3module2.id);
informaticsSemester3.addModule(informaticsSemester3module3.id);
informaticsSemester3.addModule(informaticsSemester3module4.id);
informaticsSemester3.addModule(informaticsSemester3module5.id);

const informaticsSemester4 = new StudyProgramSemester();
const informaticsSemester4module1 = new Module('Duomenų bazių valdymo sistemos', 5);
const informaticsSemester4module2 = new Module('Kompiuterių tinklai', 5);
const informaticsSemester4module3 = new Module('Matematinė logika', 5);
const informaticsSemester4module4 = new Module('Tikimybių teorija ir matematinė statistika', 5);
const informaticsSemester4module5 = new Module('Automatai ir formaliosios kalbos', 5);
const informaticsSemester4module6 = new Module('Grafai ir algoritmai', 5);
informaticsSemester4.addModule(informaticsSemester4module1.id);
informaticsSemester4.addModule(informaticsSemester4module2.id);
informaticsSemester4.addModule(informaticsSemester4module3.id);
informaticsSemester4.addModule(informaticsSemester4module4.id);
informaticsSemester4.addModule(informaticsSemester4module5.id);
informaticsSemester4.addModule(informaticsSemester4module6.id);

const informaticsSemester5 = new StudyProgramSemester();
const informaticsSemester5module1 = new Module('Kriptografija ir informacijos sauga', 5);
const informaticsSemester5module2 = new Module('Optimizavimo metodai', 5);
const informaticsSemester5module3 = new Module('IT projektų valdymas', 5);
const informaticsSemester5module4 = new Module('Judrusis programavimas Ruby', 5);
const informaticsSemester5module5 = new Module('Taikomųjų programų kūrimas mobiliesiems įrenginiams ir autonominėms sistemoms', 5);
informaticsSemester5.addModule(informaticsSemester5module1.id);
informaticsSemester5.addModule(informaticsSemester5module2.id);
informaticsSemester5.addModule(informaticsSemester5module3.id);
informaticsSemester5.addModule(informaticsSemester5module4.id);
informaticsSemester5.addModule(informaticsSemester5module5.id);

const informaticsSemester6 = new StudyProgramSemester();
const informaticsSemester6module1 = new Module('Algoritmų analizė', 5);
const informaticsSemester6module2 = new Module('Kursinis darbas', 5);
const informaticsSemester6module3 = new Module('Lygiagretieji skaičiavimai', 5);
const informaticsSemester6module4 = new Module('Operacinės sistemos', 5);
const informaticsSemester6module5 = new Module('Automatai ir formaliosios kalbos', 5);
informaticsSemester6.addModule(informaticsSemester6module1.id);
informaticsSemester6.addModule(informaticsSemester6module2.id);
informaticsSemester6.addModule(informaticsSemester6module3.id);
informaticsSemester6.addModule(informaticsSemester6module4.id);
informaticsSemester6.addModule(informaticsSemester6module5.id);

const informaticsSemester7 = new StudyProgramSemester();
const informaticsSemester7module1 = new Module('Funkcinis programavimas', 5);
const informaticsSemester7module2 = new Module('Kursinio darbo projektas', 5);
const informaticsSemester7module3 = new Module('Programų sistemų inžinerija', 10);
const informaticsSemester7module4 = new Module('Chaoso teorija ir fraktalai', 5);
const informaticsSemester7module5 = new Module('Dirbtinis intelektas', 5);
informaticsSemester7.addModule(informaticsSemester7module1.id);
informaticsSemester7.addModule(informaticsSemester7module2.id);
informaticsSemester7.addModule(informaticsSemester7module3.id);
informaticsSemester7.addModule(informaticsSemester7module4.id);
informaticsSemester7.addModule(informaticsSemester7module5.id);

const informaticsSemester8 = new StudyProgramSemester();
const informaticsSemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: informatika)', 15);
const informaticsSemester8module2 = new Module('Profesinė praktika', 15);
informaticsSemester8.addModule(informaticsSemester8module1.id);
informaticsSemester8.addModule(informaticsSemester8module2.id);

informatics.addSemester(1, informaticsSemester1);
informatics.addSemester(2, informaticsSemester2);
informatics.addSemester(3, informaticsSemester3);
informatics.addSemester(4, informaticsSemester4);
informatics.addSemester(5, informaticsSemester5);
informatics.addSemester(6, informaticsSemester6);
informatics.addSemester(7, informaticsSemester7);
informatics.addSemester(8, informaticsSemester8);

export const informaticsModules = [
    informaticsSemester1module1,
    informaticsSemester1module2,
    informaticsSemester1module3,
    informaticsSemester1module4,
    informaticsSemester1module5,
    informaticsSemester1module6,

    informaticsSemester2module1,
    informaticsSemester2module2,
    informaticsSemester2module3,
    informaticsSemester2module4,
    informaticsSemester2module5,
    informaticsSemester2module6,

    informaticsSemester3module1,
    informaticsSemester3module2,
    informaticsSemester3module3,
    informaticsSemester3module4,
    informaticsSemester3module5,

    informaticsSemester4module1,
    informaticsSemester4module2,
    informaticsSemester4module3,
    informaticsSemester4module4,
    informaticsSemester4module5,
    informaticsSemester4module6,

    informaticsSemester5module1,
    informaticsSemester5module2,
    informaticsSemester5module3,
    informaticsSemester5module4,
    informaticsSemester5module5,

    informaticsSemester6module1,
    informaticsSemester6module2,
    informaticsSemester6module3,
    informaticsSemester6module4,
    informaticsSemester6module5,

    informaticsSemester7module1,
    informaticsSemester7module2,
    informaticsSemester7module3,
    informaticsSemester7module4,
    informaticsSemester7module5,

    informaticsSemester8module1,
    informaticsSemester8module2,
];

export default informatics;
