import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const economicsFaculty = new Faculty('Ekonomikos ir verslo administravimo fakultetas');

const faculties = [
  infoAndMathFaculty,
  economicsFaculty
];

export default faculties;
