import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const ecoFaculty = new Faculty('Ekonomikos ir verslo adminstravimo fakultetas');


const faculties = [
  infoAndMathFaculty,
  ecoFaculty,
];

export default faculties;
