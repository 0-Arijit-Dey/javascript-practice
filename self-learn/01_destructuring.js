'use strict'

// Destructuring in JavaScript is a powerful and concise way of extracting values from arrays or properties from objects into distinct variables & allowing for easy assignment of variables from complex data structures.

/////////////////////////////////////////////////////////////

// Array Destructuring ---------------------------> []

    // Bacic syntax --------
    const [a1,b1] = [5,6]
    // console.log(a1,b1); // 5, 6
    
    // skipping values --------
    const [a2,,b2] = [5,6,7]
    // console.log(a2,b2); // 5, 7
    
    // rest syntax with destructuring --------
    const [a3,...b3] = [5,6,7]
    // console.log(a3,b3); // 5, [6,7]

    // default values ----
    const [a4,b4 = 6] = [5]
    // console.log(a4,b4); // 5, 6
    
    // swapping variables --------
    let a5 = 5, b5 = 6;
    [a5,b5] = [b5,a5]
    // console.log(a5,b5); // 6, 5

    // nested destructuring --------
    const [a6,[b6,c6]] = [5,[6,7]]
    // console.log(a6,b6,c6); // 5, 6, 7
    
    // destructuring with function --------
    const [a7,b7] = getValues()
    function getValues(){
        return [5,6]
    }
    // console.log(a7,b7); // 5, 6
    
////////////////////////////////////////////////////////////////
// Object Destructuring ----------------------------> {}
    
    // basics syntax --------
    const obj1 = {name1:'hardik',age1:20}
    const {name1,age1} = obj1
    // console.log(name1,age1); // hardik, 20

    // renaming variables --------
    const obj2 = {name2:'hardik',age2:20}
    const {name2,age2:old} = obj2
    // console.log(name2,old); // hardik, 20

    // default values --------
    const obj3 = {name3:'hardik',age3:20}
    const {name3,languege = 'hindi'} = obj3
    // console.log(name3,languege); // hardik, hindi
 
    // nested object destructuring --------
    const obj4 = {
        name4:'hardik',
        age4:20,
        address:{
            cuntry:'india',
            city:'mumbai'
        }
    }
    const {address:{cuntry,city}} = obj4
    // console.log(cuntry,city); // india, mumbai
    
    // destructuring with Rest in Objects --------
    const obj5 = {name5:'hardik',age5:20,price5:50000}
    const {name5,...rest} = obj5
    // console.log(name5,rest); // hardik, { age5: 20, price: 50000 }
    
    // destructuring in function perameter --------
    const obj6 = {name6:'hardik',age6:20,price6:50000}
    function destruct1({name6,age6}){
        // console.log(name6,age6); 
    }
    function destruct2({name6 = 'none',city6 = 'mumbai'} = {}){
        // console.log(name6,city6);
    }
    destruct1(obj6) // hardik, 20
    destruct2() // none, mumbai
    


