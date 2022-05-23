import Faculty from '../entities/faculty.js';

export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
<<<<<<< HEAD
export const medFaculty = new Faculty('Medicinos fakultetas');

const faculties = [
  infoAndMathFaculty,
  medFaculty
=======
export const economicsAndBusinessFaculty = new Faculty('Ekonomikos ir verslo administravimo fakultetas');
export const medicineFaculty = new Faculty('Medicinos fakultetas');
export const chemistryAndGeoSciencesFaculty = new Faculty ('Chemijos ir geomokslų fakultetas');

const faculties = [
  infoAndMathFaculty,
  economicsAndBusinessFaculty,
  medicineFaculty,
  chemistryAndGeoSciencesFaculty,
>>>>>>> master
];

export default faculties;