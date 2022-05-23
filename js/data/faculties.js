import Faculty from '../entities/faculty.js';

export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const economicsAndBusinessFaculty = new Faculty('Ekonomikos ir verslo administravimo fakultetas');
export const medicineFaculty = new Faculty('Medicinos fakultetas');
export const chemistryAndGeoSciencesFaculty = new Faculty ('Chemijos ir geomokslų fakultetas');

const faculties = [
  infoAndMathFaculty,
  economicsAndBusinessFaculty,
  medicineFaculty,
  chemistryAndGeoSciencesFaculty,
];

export default faculties;
