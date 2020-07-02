// import employers from '../data/json/employers_http.json';
import employers from '../data/json/employers_https.json';
import work from '../data/json/work_complete.json';
import about from '../data/json/about.json';


// const employerData = employers.map((employer) => employer);
// const workData = work.map((workItem) => workItem);
// const aboutData = about.map((thought) => thought);


console.log('');
console.log('==========  MyData.jsx  ==========');
console.log('employers');
console.log(employers);
// console.log('');

console.log('work');
console.log(work);
// console.log('');

console.log('about');
console.log(about);
// console.log('');


export default [employers, work, about];
// export default [employerData, workData, aboutData];
