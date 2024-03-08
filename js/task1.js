console.log('Hello World'.toLowerCase())
console.log('Hello World'.toUpperCase())

// function askTestName (){
// const name = prompt('What is the "official" name of JavaScript? ');
//  const normalizedName = name.toLowerCase()
//    if(name === 'ECMAScript'){
//      alert ('True')
         
//    }else{
//        alert ('You don`t know ECMAScript')
//    }
// }

// console.log(askTestName());

// function askTestName (){
//     const name = prompt('What is the "official" name of JavaScript? ').toLowerCase();
    
//        if(name === 'ECMAScript'.toLowerCase()){
//          alert ('True')
             
//        }else{
//            alert ('You don`t know ECMAScript')
//        }
//     }
    
//     console.log(askTestName());



// function askTestName (){
//     const name = prompt('What is the "official" name of JavaScript?');
    
//        if(name.toLowerCase() === 'ECMAScript'.toLowerCase()){
//          alert ('True')
             
//        }else{
//            alert ('You don`t know ECMAScript')
//        }
//     }
    
//     console.log(askTestName());


// function askTestName(){
//     const name = propmpt ('What is the "official" name of JavaScript?');
//     (name.toLowerCase() === 'ECMAScript'.toLowerCase()) ? alert ('True') : alert('You don`t know ECMAScript');
// }

function askTestName(){
    const name = prompt ('What is the "official" name of JavaScript?');
    return name.toLowerCase() === 'ECMAScript'.toLowerCase() ? 'True' : 'You don`t know ECMAScript';
}
askTestName();
console.log(askTestName());