// var message = 'Hello Node!'

// let sum = 5+3 

// console.log(message)
// console.log(sum)


 profileDataArgs = process.argv.slice(2, process.argv.length)

// console.log(profileDataArgs)


const printProfileData = (profileDataArr) => {
   //this 
            profileDataArr.forEach((profileItem) => console.log (profileItem))
   //Is the same as this 
            // for(let i = 0; i < profileDataArr.length; i++){
            // console.log(profileDataArr[i])
            // }
}

printProfileData(profileDataArgs); 