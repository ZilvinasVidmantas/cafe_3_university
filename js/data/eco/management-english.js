import Faculty from './entities/faculty.js';
import StudyProgram from './entities/study-program.js';
import StudyProgramSemester from './entities/study-program-semester.js';
import Module from './entities/module.js';

export const faculties = [];
export const studyPrograms = [];
export const modules = [];

const managementAndBusinessAdministrationFaculty = new Faculty('Ekonomikos ir verslo administravimo fakultetas');
faculties.push(managementAndBusinessAdministrationFaculty);

const managementEnglish = new StudyProgram('Vadyba anglų k.', managementAndBusinessAdministrationFaculty.id);
studyPrograms.push(managementEnglish);

const managementEnglishSemester1 = new StudyProgramSemester();
const managementEnglishSemester1module1 = new Module('Dalykinė anglų kalba C1', 5)
const managementEnglishSemester1module2 = new Module('Ekonomikos teorija', 5)
const managementEnglishSemester1module3 = new Module('Mokslinio teksto rašymas ir pristatymas', 5)
const managementEnglishSemester1module4 = new Module('Naujo verslo kūrimas', 5)
const managementEnglishSemester1module5 = new Module('Vadyba', 5)
const managementEnglishSemester1module6 = new Module('Verslo matematika', 5)
managementEnglishSemester1.addModule(managementEnglishSemester1module1.id);
managementEnglishSemester1.addModule(managementEnglishSemester1module2.id);
managementEnglishSemester1.addModule(managementEnglishSemester1module3.id);
managementEnglishSemester1.addModule(managementEnglishSemester1module4.id);
managementEnglishSemester1.addModule(managementEnglishSemester1module5.id);
managementEnglishSemester1.addModule(managementEnglishSemester1module6.id);

const managementEnglishSemester2 = new StudyProgramSemester();
const managementEnglishSemester2module1 = new Module('Apskaitos pagrindai', 5)
const managementEnglishSemester2module2 = new Module('Dalykinė anglų kalba C1', 5)
const managementEnglishSemester2module3 = new Module('Informacinės technologijos', 5)
const managementEnglishSemester2module4 = new Module('Rinkodara', 5)
const managementEnglishSemester2module5 = new Module('Verslo statistika', 5)
managementEnglishSemester2.addModule(managementEnglishSemester2module1.id);
managementEnglishSemester2.addModule(managementEnglishSemester2module2.id);
managementEnglishSemester2.addModule(managementEnglishSemester2module3.id);
managementEnglishSemester2.addModule(managementEnglishSemester2module4.id);
managementEnglishSemester2.addModule(managementEnglishSemester2module5.id);

const managementEnglishSemester3 = new StudyProgramSemester();
const managementEnglishSemester3module1 = new Module('Organizacijų socialinė atsakomybė ir etika', 5)
const managementEnglishSemester3module2 = new Module('Verslo derybos ir psichologija', 5)
const managementEnglishSemester3module3 = new Module('Verslo teisė', 5)
const managementEnglishSemester3module4 = new Module('Verslumas', 5)
managementEnglishSemester3.addModule(managementEnglishSemester3module1.id);
managementEnglishSemester3.addModule(managementEnglishSemester3module2.id);
managementEnglishSemester3.addModule(managementEnglishSemester3module3.id);
managementEnglishSemester3.addModule(managementEnglishSemester3module4.id);

const managementEnglishSemester4 = new StudyProgramSemester();
const managementEnglishSemester4module1 = new Module('Finansų pagrindai', 5)
const managementEnglishSemester4module2 = new Module('Globalus verslas', 5)
const managementEnglishSemester4module3 = new Module('Organizacinė elgsena', 5)
const managementEnglishSemester4module4 = new Module('Vartotojų elgsena', 5)
const managementEnglishSemester4module5 = new Module('Kainodara ir pardavimų skatinimas', 5)
managementEnglishSemester4.addModule(managementEnglishSemester4module1.id);
managementEnglishSemester4.addModule(managementEnglishSemester4module2.id);
managementEnglishSemester4.addModule(managementEnglishSemester4module3.id);
managementEnglishSemester4.addModule(managementEnglishSemester4module4.id);
managementEnglishSemester4.addModule(managementEnglishSemester4module5.id);

const managementEnglishSemester5 = new StudyProgramSemester();
const managementEnglishSemester5module1 = new Module('Asmeniniai finansai', 5)
const managementEnglishSemester5module2 = new Module('Projektų valdymas', 5)
const managementEnglishSemester5module3 = new Module('Verslo strategijos', 5)
const managementEnglishSemester5module4 = new Module('Verslo tyrimai', 5)
managementEnglishSemester5.addModule(managementEnglishSemester5module1.id);
managementEnglishSemester5.addModule(managementEnglishSemester5module2.id);
managementEnglishSemester5.addModule(managementEnglishSemester5module3.id);
managementEnglishSemester5.addModule(managementEnglishSemester5module4.id);

const managementEnglishSemester6 = new StudyProgramSemester();
const managementEnglishSemester6module1 = new Module('Inovacijų valdymas', 5)
const managementEnglishSemester6module2 = new Module('Lyderystė ir pokyčių valdymas', 5)
const managementEnglishSemester6module3 = new Module('Personalo vadyba', 10)
const managementEnglishSemester6module4 = new Module('Verslo modeliai ir operacijos', 5)
const managementEnglishSemester6module5 = new Module('Elektroninis verslas', 5)
managementEnglishSemester6.addModule(managementEnglishSemester6module1.id);
managementEnglishSemester6.addModule(managementEnglishSemester6module2.id);
managementEnglishSemester6.addModule(managementEnglishSemester6module3.id);
managementEnglishSemester6.addModule(managementEnglishSemester6module4.id);
managementEnglishSemester6.addModule(managementEnglishSemester6module5.id);

const managementEnglishSemester7 = new StudyProgramSemester();
const managementEnglishSemester7module1 = new Module('Duomenų analizė ir interpretavimas', 5)
const managementEnglishSemester7module2 = new Module('Įmonės veiklos vertinimas', 5)
const managementEnglishSemester7module3 = new Module('Kokybės vadyba', 5)
const managementEnglishSemester7module4 = new Module('Kursinis darbas', 5)
const managementEnglishSemester7module5 = new Module('Intelektinė nuosavybė', 5)
managementEnglishSemester7.addModule(managementEnglishSemester7module1.id);
managementEnglishSemester7.addModule(managementEnglishSemester7module2.id);
managementEnglishSemester7.addModule(managementEnglishSemester7module3.id);
managementEnglishSemester7.addModule(managementEnglishSemester7module4.id);
managementEnglishSemester7.addModule(managementEnglishSemester7module5.id);

const managementEnglishSemester8 = new StudyProgramSemester();
const managementEnglishSemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: vadyba)', 15)
const managementEnglishSemester8module2 = new Module('Profesinė praktika', 15)
managementEnglishSemester8.addModule(managementEnglishSemester8module1);
managementEnglishSemester7.addModule(managementEnglishSemester8module2);

managementEnglish.addSemester(1, managementEnglishSemester1);
managementEnglish.addSemester(2, managementEnglishSemester2);
managementEnglish.addSemester(3, managementEnglishSemester3);
managementEnglish.addSemester(4, managementEnglishSemester4);
managementEnglish.addSemester(5, managementEnglishSemester5);
managementEnglish.addSemester(6, managementEnglishSemester6);
managementEnglish.addSemester(7, managementEnglishSemester7);
managementEnglish.addSemester(8, managementEnglishSemester8);

modules.push(
    managementEnglishSemester1module1,
    managementEnglishSemester1module2,
    managementEnglishSemester1module3,
    managementEnglishSemester1module4,
    managementEnglishSemester1module5,
    managementEnglishSemester1module6,
    managementEnglishSemester2module1,
    managementEnglishSemester2module2,
    managementEnglishSemester2module3,
    managementEnglishSemester2module4,
    managementEnglishSemester2module5,
    managementEnglishSemester3module1,
    managementEnglishSemester3module2,
    managementEnglishSemester3module3,
    managementEnglishSemester3module4,
    managementEnglishSemester4module1,
    managementEnglishSemester4module2,
    managementEnglishSemester4module3,
    managementEnglishSemester4module4,
    managementEnglishSemester4module5,
    managementEnglishSemester5module1,
    managementEnglishSemester5module2,
    managementEnglishSemester5module3,
    managementEnglishSemester5module4,
    managementEnglishSemester6module1,
    managementEnglishSemester6module2,
    managementEnglishSemester6module3,
    managementEnglishSemester6module4,
    managementEnglishSemester6module5,
    managementEnglishSemester7module1,
    managementEnglishSemester7module2,
    managementEnglishSemester7module3,
    managementEnglishSemester7module4,
    managementEnglishSemester7module5,
    managementEnglishSemester8module1,
    managementEnglishSemester8module2,
);

export default management-english;
