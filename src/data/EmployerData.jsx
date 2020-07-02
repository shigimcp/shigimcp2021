import employers from '../data/json/employers_https.json';


const employerData = employers.map((employer) => employer);

console.log('');

console.log('==========  EmployerData.jsx  ==========');
console.log('employers = ' + employers);
console.log(employers);

console.log('');

console.log('employerData = ' + employerData);
console.log(employerData);


export default employerData;
// export default [employerData, workData, aboutData];
