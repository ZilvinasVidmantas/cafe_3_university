import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const EconomicsFaculty = new Faculty('Ekonomikos ir verslo administravimo fakultetas');

const faculties = [
  infoAndMathFaculty,
  EconomicsFaculty
];

export default faculties;
