import Faculty from "../entities/faculty.js";

export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const economicsAndBusinessFaculty = new Faculty("Ekonomikos ir verslo administravimo fakultetas");
export const medicineFaculty = new Faculty('Medicinos fakultetas');

const faculties = [
  infoAndMathFaculty,
  economicsAndBusinessFaculty,
  medicineFaculty,
];

export default faculties;
