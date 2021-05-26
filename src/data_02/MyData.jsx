// import employers from '../data/json/employers_http.json';
import employers from '../data/employers_https.json';
import work from '../data/work.json';
import about from '../data/about.json';
import skills from '../data/skills.json'


// const employerData = employers.map((employer) => employer);
// const workData = work.map((workItem) => workItem);
// const aboutData = about.map((thought) => thought);
// const skillData = skills.map((category) => category);


// console.log('');
// console.log('==========  MyData.jsx  ==========');

// console.log('employers');
// console.log(employers);
// console.log('');

// console.log('work');
// console.log(work);
// console.log('');

// console.log('about');
// console.log(about);
// console.log('');

// console.log('skills');
// console.log(skills);
// console.log('');

localStorage.setItem('employers', employers);
localStorage.setItem('work', work);
localStorage.setItem('about', about);
localStorage.setItem('skills', skills);

let myData = [employers, work, about, skills];

// export default [employers, work, about, skills];
// export default [employerData, workData, aboutData, skillData];
export default myData;
