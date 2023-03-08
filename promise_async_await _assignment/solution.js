
function getData(uId) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 4000);
    })
}  
console.log("start");
var email =async function(){
    return await getData("skc");
} 
email().then(mail=>{
    console.log("Email id of the user id is: " + mail)
    console.log("end");
});