function progress(about){
    alert(`Sorry ${about} Page is not publish yet..`);
    // alert("hii");
}

function fun() {
    let input = prompt("OTP has been sent to you on your mobile number end with 620*****21.please enter it below.");
   if(input === "10600120008"){
        window.location.href = "html/developer.html";
   } else if(input === "") {
       alert("OTP Filed is Blanked");
   } else {
       alert("Invalid OTP.");
   }
    
}

// const nav = document.getElementById("developer");
// nav.addEventListener("click", () =>{
//    let input = prompt("OTP has been sent to you on your mobile number end with **21.please enter it below.");
//    if(input === "10600120008"){
//         window.location.href = "html/developer.html";
//    } else if(input === "") {
//        alert("OTP Filed is Blanked");
//    } else {
//        alert("Invalid OTP.");
//    }
   
//  })  
 

// const confirm = () =>{
//     const input = 

// }




