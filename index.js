// function sendMail() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     if (name === "" || email === "" || message === "") {
//         alert("Please fill out all fields before submitting.");
//         return;
//     }

//     var params = {
//         name: name,
//         email: email,
//         message: message,
//     };
//     const serviceId="service_lj8ahc8";
// const templateId="template_iymwm2d"

// emailjs.send(serviceId,templateId,params)
// .then(
//     res => {
//         document.getElementById("name").value="";
//         document.getElementById("email").value="";
//         document.getElementById("message").value="";

//         console.log(res);
//         alert("your message sent successfully")
//     }
// )
// .catch(err=>console.log("error"))
// ;
// }

function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    var params = {
        name: name,
        email: email,
        message: message,
    };
    const serviceId="service_lj8ahc8";
const templateId="template_iymwm2d"

emailjs.send(serviceId,templateId,params)
.then(
    res => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";

        console.log(res);
        alert("your message sent successfully")
    }
)
.catch(err=>console.log("error",err))
;
}





