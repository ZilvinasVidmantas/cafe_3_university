import Faculty from "../entities/faculty.js";

export const infoAndMathFaculty = new Faculty("Informatikos ir matematikos fakultetas");
export const economicsAndBusinessFaculty = new Faculty("Ekonomikos ir verslo administravimo fakultetas");
export const chemistryAndGeoScienceFaculty = new Faculty('Chemijos ir geomokslų fakultetas');

const faculties = [
  infoAndMathFaculty,
  economicsAndBusinessFaculty,
  chemistryAndGeoScienceFaculty,
]

export default faculties;
