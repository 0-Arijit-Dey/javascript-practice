//.1
// let ritikRuns = {name:'Ritik',total:0}
// let otherRuns = ritikRuns
// otherRuns.total = 90

// console.log(ritikRuns); // 90
// console.log(otherRuns); // 90

//.2
// let ritikRuns = {name:'Ritik',total:0}
// let otherRuns = {...ritikRuns}
// otherRuns.total = 90
// console.log(ritikRuns); // 0
// console.log(otherRuns); // 90

//.3
// let ritikRuns = {name:'Ritik',total:0, balls:{type:'leather','0':{color:'white'}}}
// let otherRuns = {...ritikRuns}
// otherRuns.balls.type = 'tennis'
// otherRuns.total = 10
// otherRuns.balls[0].color = 'black'

// console.log(ritikRuns); // 'tennis' // 0
// console.log(otherRuns); // 'tennis' // 10

//.4
// let ritikRuns = {name:'Ritik',total:0, balls:{type:'leather'}}
// let otherRuns = deepCopy(ritikRuns); //IMPLEMENT THIS FUNCTION
// otherRuns.balls.type = 'tennis' // BUT THE CHENGE SHOW ONLY IN otherRuns NOT IN THE ritikRuns

// console.log(ritikRuns);
// console.log(otherRuns);
///////////////////////////////////////////////////////
// function myFunction(a, b) {
//   let keys = Object.keys(a);
//   keys.forEach((key) => {
//     a[key] = a[key] * b;
//   });
//   return a;
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));
///////////////////////////////////////////////////////

// function myFunction(a, b) {
//   let keysOfa = Object.keys(a);
//   let keysOfb = Object.keys(b);

//   keysOfa.forEach((keya) => {
//     keysOfb.forEach((keyb) => {
//       if (keya === keyb) {
//         b.d = b[keyb];
//         delete b[keyb];
//       }
//     });
//   });
//   return { ...a, ...b };
// }

// console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
/////////////////////////////////////////////////////////

// function myFunction(obj) {
//   const { b, ...rest } = obj;
//   return rest;
// }

// console.log(myFunction({ a: 1, b: 7, c: 3 }));
// console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));
////////////////////////////////////////////////////////

// function myFunction(a) {
//     let total = 0;
//      Object.keys(a).forEach((key) => {
//      total += (a[key]);

//     });
//   return total
// }

// console.log(myFunction({a:1,b:2,c:3}));
//////////////////////////////////////////////////////////////

// function myFunction(a, b) {

//   return !(a ?. [b]) ? false:true
// }

// console.log(myFunction({x:'a',y:undefined,z:'c'},'y'));
//////////////////////////////////////////////////////////////

// function myFunction(a, b) {
//   let obj = {}
//   a.forEach((item) => {
//     obj[item] = b.shift()
//   });

//   return obj;
// }

// console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
// console.log(myFunction([1,'b'],['a',2]));
// console.log(myFunction(['w','x','y','z'],[10,9,5,2]));
/////////////////////////////////////////////////////////////


// function myFunction(a, b) {
  
//   return a.hasOwnProperty(b)
// }

// console.log(myFunction({x:'a',y:'b',z:undefined},'z'));
////////////////////////////////////////////////////////////

function myFunction(a,b){
  return (b in a)?a?.[b]:false

}

console.log(myFunction({x:'a',0:'b',z:null},'z'))
