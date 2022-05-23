import Faculty from '../entities/faculty.js';

<<<<<<< HEAD

export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const economicsAndBusinessFaculty = new Faculty("Ekonomikos ir verslo administravimo fakultetas");
export const chemistryAndGeoScienceFaculty = new Faculty('Chemijos ir geomokslų fakultetas');
export const medicineFaculty = new Faculty('Medicinos fakultetas');
=======
export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const economicsAndBusinessFaculty = new Faculty('Ekonomikos ir verslo administravimo fakultetas');
export const medicineFaculty = new Faculty('Medicinos fakultetas');
export const chemistryAndGeoSciencesFaculty = new Faculty ('Chemijos ir geomokslų fakultetas');
>>>>>>> master

const faculties = [
  infoAndMathFaculty,
  economicsAndBusinessFaculty,
<<<<<<< HEAD
  chemistryAndGeoScienceFaculty,
  medicineFaculty,
=======
  medicineFaculty,
  chemistryAndGeoSciencesFaculty,
>>>>>>> master
];

export default faculties;
