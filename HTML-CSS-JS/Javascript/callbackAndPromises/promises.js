// settle means  resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully


console.log(" this is a promises file");

// let promis1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.5) {
//         reject("No! random number are not supporting..");
//     } else {
//         setTimeout(() => {
//             console.log("i am done the myn promise......")
//             resolve("Chhagan kumawat")
//         }, 2000);
//     }
// })

// let promis2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.5) { 
//         reject("No! random number are not supporting..");
//     } else {
//         setTimeout(() => {
//             console.log("i am done the myn promise......")
//             resolve("Chhagan kumawat 2")
//         }, 2000);
//     }
// })

// let promis3 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.5) { 
//         reject("No! random number are not supporting..");
//     } else {
//         setTimeout(() => {
//             console.log("i am done the myn promise......")
//             resolve("Chhagan kumawat 3")
//         }, 2000);
//     }
// })

// let p = Promise.all([promis1, promis2])
// p.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// });

// let p = Promise.allSettled([promis1, promis2])
// p.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })

// let p = Promise.race([promis1, promis2])
// p.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })

// let p = Promise.any([promis1, promis2, promis3])
// p.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })

// let p = Promise.resolve([promis1, promis2, promis3])
// p.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })

// let p = Promise.reject([promis1, promis2, promis3])
// p.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('There has been a problem with your fetch operation:', error);
//     document.write.error('There has been a problem with your fetch operation:', error);
//   });
