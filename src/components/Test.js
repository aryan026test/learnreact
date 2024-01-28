// const xyz = new Promise((resolve, reject) => {
//   let age = 20;
//   if (age >= 18) {
//     resolve("voter");
//   } else {
//     reject("Not a voter");
//   }
// });

// xyz
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then(data => console.log(data))
//   .catch((error) => {
//     console.log(error);
// });

// setInterval(()=>{
//   console.log('this is running in setTimeout')
// }, 1000)

// setInterval(()=>{
//   console.log('this is running in 2nd setTimeout')
// }, 2000)

// const myfunc = async () => {
//   let a = await fetch("https://jsonplaceholder.typicode.com/comments");
//   a = await a.json();
//   console.log(a);
//   console.log("code is here");
// };

// myfunc();

//Promise 1
const p1 = new Promise((resolve, reject) => {
  let n = 100;
  if (n > 40) {
    resolve("Pass");
  } else {
    reject("fail");
  }
});

p1.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});

const f1 = async () =>{
  let a = await p1.then()
  console.log(a)
}

f1();

//Promise 2
const p2 = new Promise((resolve, reject)=>{
  
})