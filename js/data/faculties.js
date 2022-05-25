import Faculty from '../entities/faculty.js';

const faculties = [];

export const informaticsFaculty = new Faculty('Informatikos fakultetas');
export const philosophyFaculty = new Faculty('Filosofijos fakultetas');

faculties.push(informaticsFaculty);
faculties.push(philosophyFaculty);

export default faculties;
