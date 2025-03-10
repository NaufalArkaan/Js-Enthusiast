// function generatearray(n){
//     const result = [];
//     for(let counter = 0; counter <= n; counter++){
//         result.push(counter);
//     }
//     return result;
// }

// console.log(generatearray(5));

// function generateArray(n) {
//     if (n < 0) {
//       return [];
//     }
  
//     return [...generateArray(n - 1), n];
//   }
  
//   console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

// function registerEmail(person, email) {
//     return Object.assign(person, { email });
//   }
  
//   const person = {
//     name: 'John',
//     username: 'johndoe',
//   };
  
//   const personWithEmail = registerEmail(person, 'john@dicoding.com');
  
//   console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
//   console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }



// const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);

// console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]


// const students = [
//     {
//       name: 'Harry',
//       score: 60,
//     },
//     {
//       name: 'James',
//       score: 88,
//     },
//     {
//       name: 'Ron',
//       score: 90,
//     },
//     {
//       name: 'Bethy',
//       score: 75,
//     }
//   ];
  
//   const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
//   console.log(eligibleForScholarshipStudents);

