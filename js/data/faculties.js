import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const philosophyFaculty = new Faculty('Filosofijos fakultetas');

const faculties = [
  infoAndMathFaculty,
  philosophyFaculty,
];

export default faculties;
