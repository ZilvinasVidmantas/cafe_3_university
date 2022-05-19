import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const medFaculty = new Faculty('Medicinos fakultetas');

const faculties = [
  infoAndMathFaculty,
  medFaculty
];

export default faculties;