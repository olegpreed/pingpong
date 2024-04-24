// async function doSmth(){
//       console.log('1');
//       const res = await fetch('https://jsnplaceholder.typicode.com/todos/1');
//       console.log('2')
//       const info = await res.json();
//       console.log('3')
//       console.log(info)
//       console.log('4')
// }

// doSmth().catch((err) => console.log(err.message))

async function doSmth(){
     try {console.log('1');
      const res = await fetch('https://jsnplaceholder.typicode.com/todos/1');
      console.log('2')
      const info = await res.json();
      console.log('3')
      console.log(info)
      console.log('4')}
      catch (err)
      {
            console.log(err.message)
      }
}
doSmth()
// console.log('5')

// const prom = new Promise((resolve, reject)=>{
//     console.log('1');
//     setTimeout(()=> console.log('2'), 0)
//     setTimeout(()=> resolve('3'), 0);
//   })
  
//   prom.then((res)=>console.log(res))
  
//   console.log('4')

// setTimeout(()=> console.log('hello there'), 0)
// Promise.resolve(42).then((res)=>console.log(res))
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
  
  
// /**
//  * Adds two numbers.
//  * @param {number} a - The first number.
//  * @param {String} b - The second number.
//  * @returns {number} - The sum of a and b.
//  */
// const func = (a, b) => {
//     a = 'hello2'
//     b = b.toUpperCase()
// }