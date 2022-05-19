import Faculty from '../entities/faculty.js';


export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const chemijosIrGeomokslu = new Faculty ('Chemijos ir geomokslų fakultetas');

const faculties = [
  infoAndMathFaculty,
  chemijosIrGeomokslu,
];

export default faculties;
