import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const medicineFaculty = new Faculty('Medicinos fakultetas');

const faculties = [
  infoAndMathFaculty,
  medicineFaculty,
];

export default faculties;
