// function show(a){
//     console.log(a)
// }

// function calc(a,b, callbackFunction){
//  let sum = a+b
//  show(sum)
// }

// // let result = calc(2,5)

// // show(result)
// calc(2,5)


// function show(a){
//     console.log(a)
// }


// function calc(a,b){
//     return a + b
// }

// let result = setTimeout(()=> calc(2,5), 1000)

// show(result)













 const paraqraph = document.querySelector('.clock')




 setInterval(() =>{
    let date = new Date()
    
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()




seconds = seconds < 10 ? "0" + seconds : seconds;
minutes = minutes < 10 ? "0" + minutes : minutes;
hours = hours < 10 ? "0" + hours : hours;



     paraqraph.innerHTML = `${hours } : ${minutes } : ${seconds }`
    
 },1000)






// for (let i in seconds){
//     //s     econds = seconds < 10 ? "0" + seconds : seconds;
    
//     // }



  

// for (let i in seconds){
//s     econds = seconds < 10 ? "0" + seconds : seconds;

// }





// function addZero(){
//     const newzero = {
//         seconds = seconds < 10 ? "0" + seconds : seconds;
       
//     }

//     seconds.push(newzero)
//     seconds.value = 0

// }



// addZero()


