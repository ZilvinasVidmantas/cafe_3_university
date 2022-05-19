import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const chemistryFaculty = new Faculty('Chemijos ir geomokslų fakultetas');


const faculties = [
  infoAndMathFaculty,
  chemistryFaculty,
];

export default faculties;
