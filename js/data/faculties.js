import Faculty from '../entities/faculty.js';

const faculties = [
    philosophyFaculty,
];

export const informaticsFaculty = new Faculty('Informatikos fakultetas');
export const philosophyFaculty = new Faculty('Filosofijos fakultetas');

faculties.push(informaticsFaculty);

export default faculties;
