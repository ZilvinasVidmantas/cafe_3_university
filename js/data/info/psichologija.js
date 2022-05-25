import Faculty from './entities/faculty.js';
import StudyProgram from './entities/study-program.js';
import StudyProgramSemester from './entities/study-program-semester.js';
import Module from './entities/module.js';

export const faculties = [];
export const studyPrograms = [];
export const modules = [];

const philosophyFaculty = new Faculty('Filosofijos fakultetas');
faculties.push(philosophyFaculty);

const psychology = new StudyProgram('Psichologija', philosophyFaculty.id);
studyPrograms.push(psychology);

const psychologySemester1 = new StudyProgramSemester();
const psychologySemester1module1 = new Module('Evoliucinė psichologija', 5)
const psychologySemester1module2 = new Module('Įvadas į statistinę duomenų analizę psichologijoje', 5)
const psychologySemester1module3 = new Module('Neuroanatomija ir neurofiziologija', 6)
const psychologySemester1module4 = new Module('Psichologijos studijų įvadas', 4)
const psychologySemester1module5 = new Module('Užsienio kalba C1 I/II d.', 5)
const psychologySemester1module6 = new Module('Bendrauniversitetiniai dalykai', 5)
psychologySemester1.addModule(psychologySemester1module1.id);
psychologySemester1.addModule(psychologySemester1module2.id);
psychologySemester1.addModule(psychologySemester1module3.id);
psychologySemester1.addModule(psychologySemester1module4.id);
psychologySemester1.addModule(psychologySemester1module5.id);
psychologySemester1.addModule(psychologySemester1module6.id);

const psychologySemester2 = new StudyProgramSemester();
const psychologySemester2module1 = new Module('Emocijos', 5)
const psychologySemester2module2 = new Module('Pažinimo psichologija I/II d.', 7)
const psychologySemester2module3 = new Module('Užsienio kalba C1 II/II d.', 3)
const psychologySemester2module4 = new Module('Pasirenkamieji dalykai', 10)
psychologySemester2.addModule(psychologySemester2module1.id);
psychologySemester2.addModule(psychologySemester2module2.id);
psychologySemester2.addModule(psychologySemester2module3.id);
psychologySemester2.addModule(psychologySemester2module4.id);

const psychologySemester3 = new StudyProgramSemester();
const psychologySemester3module1 = new Module('Pažinimo psichologija II/II d.', 10)
const psychologySemester3module2 = new Module('Raidos psichologija I/II d.', 5)
const psychologySemester3module3 = new Module('Socialinė psichologija', 5)
const psychologySemester3module4 = new Module('Pasirenkamieji dalykai', 5)
psychologySemester3.addModule(psychologySemester3module1.id);
psychologySemester3.addModule(psychologySemester3module2.id);
psychologySemester3.addModule(psychologySemester3module3.id);
psychologySemester3.addModule(psychologySemester3module4.id);

const psychologySemester4 = new StudyProgramSemester();
const psychologySemester4module1 = new Module('Asmenybės psichologija', 7)
const psychologySemester4module2 = new Module('Kursinis darbas', 4)
const psychologySemester4module3 = new Module('Psichologijos istorija', 5)
const psychologySemester4module4 = new Module('Raidos psichologija II/II d.', 5)
const psychologySemester4module5 = new Module('Pasirenkamieji dalykai', 10)
psychologySemester4.addModule(psychologySemester4module1.id);
psychologySemester4.addModule(psychologySemester4module2.id);
psychologySemester4.addModule(psychologySemester4module3.id);
psychologySemester4.addModule(psychologySemester4module4.id);
psychologySemester4.addModule(psychologySemester4module5.id);

const psychologySemester5 = new StudyProgramSemester();
const psychologySemester5module1 = new Module('Daugiamatės statistikos metodai psichologijoje', 5)
const psychologySemester5module2 = new Module('Psichologijos tyrimo metodai', 10)
const psychologySemester5module3 = new Module('Psichologinis įvertinimas ir testavimas', 5)
const psychologySemester5module4 = new Module('Pasirenkamieji dalykai', 10)
psychologySemester5.addModule(psychologySemester5module1.id);
psychologySemester5.addModule(psychologySemester5module2.id);
psychologySemester5.addModule(psychologySemester5module3.id);
psychologySemester5.addModule(psychologySemester5module4.id);

const psychologySemester6 = new StudyProgramSemester();
const psychologySemester6module1 = new Module('Klinikinė psichologija', 5)
const psychologySemester6module2 = new Module('Kursinis darbas', 5)
const psychologySemester6module3 = new Module('Organizacinė psichologija', 5)
const psychologySemester6module4 = new Module('Teisės psichologijos įvadas', 5)
const psychologySemester6module5 = new Module('Pasirenkamieji dalykai', 10)
psychologySemester6.addModule(psychologySemester6module1.id);
psychologySemester6.addModule(psychologySemester6module2.id);
psychologySemester6.addModule(psychologySemester6module3.id);
psychologySemester6.addModule(psychologySemester6module4.id);
psychologySemester6.addModule(psychologySemester6module5.id);

const psychologySemester7 = new StudyProgramSemester();
const psychologySemester7module1 = new Module('Bakalauro darbo projektas', 2)
const psychologySemester7module2 = new Module('Edukacinė psichologija', 5)
const psychologySemester7module3 = new Module('Psichologinis konsultavimas', 5)
const psychologySemester7module4 = new Module('Psichologo profesinė etika', 3)
const psychologySemester7module5 = new Module('Sveikatos psichologija', 5)
const psychologySemester7module6 = new Module('Pasirenkamieji dalykai', 10)
psychologySemester7.addModule(psychologySemester7module1.id);
psychologySemester7.addModule(psychologySemester7module2.id);
psychologySemester7.addModule(psychologySemester7module3.id);
psychologySemester7.addModule(psychologySemester7module4.id);
psychologySemester7.addModule(psychologySemester7module5.id);
psychologySemester7.addModule(psychologySemester7module6.id);

const psychologySemester8 = new StudyProgramSemester();
const psychologySemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: psichologija)', 10)
const psychologySemester8module2 = new Module('Mokomoji praktika', 15)
const psychologySemester8module3 = new Module('Pasirenkamieji dalykai', 5)
psychologySemester8.addModule(psychologySemester8module1.id);
psychologySemester8.addModule(psychologySemester8module2.id);
psychologySemester8.addModule(psychologySemester8module3.id);

psychology.addSemester(1, psychologySemester1);
psychology.addSemester(2, psychologySemester2);
psychology.addSemester(3, psychologySemester3);
psychology.addSemester(4, psychologySemester4);
psychology.addSemester(5, psychologySemester5);
psychology.addSemester(6, psychologySemester6);
psychology.addSemester(7, psychologySemester7);
psychology.addSemester(8, psychologySemester8);

modules.push(
  psychologySemester1module1,
  psychologySemester1module2,
  psychologySemester1module3,
  psychologySemester1module4,
  psychologySemester1module5,
  psychologySemester1module6,
  psychologySemester2module1,
  psychologySemester2module2,
  psychologySemester2module3,
  psychologySemester2module4,
  psychologySemester3module1,
  psychologySemester3module2,
  psychologySemester3module3,
  psychologySemester3module4,
  psychologySemester4module1,
  psychologySemester4module2,
  psychologySemester4module3,
  psychologySemester4module4,
  psychologySemester4module5,
  psychologySemester5module1,
  psychologySemester5module2,
  psychologySemester5module3,
  psychologySemester5module4,
  psychologySemester6module1,
  psychologySemester6module2,
  psychologySemester6module3,
  psychologySemester6module4,
  psychologySemester6module5,
  psychologySemester7module1,
  psychologySemester7module2,
  psychologySemester7module3,
  psychologySemester7module4,
  psychologySemester7module5,
  psychologySemester7module6,
  psychologySemester8module1,
  psychologySemester8module2,
  psychologySemester8module3,);

  export default psychology;
  