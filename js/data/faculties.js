import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const chemistryAndGeosciencesFaculty = new Faculty ('Chemijos ir geomokslų fakultetas');

const faculties = [
  infoAndMathFaculty,
  chemistryAndGeosciencesFaculty,
];

export default faculties;
