

function run() {
    //step 1

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value


      document.getElementById("userfield").innerHTML = ""
        document.getElementById("username").style.border = ""
           document.getElementById("emailfield").innerHTML = ""
        document.getElementById("email").style.border = ""
          document.getElementById("msgfield").innerHTML = ""
        document.getElementById("msg").style.border = ""

    let isvalid = true 

    if (username === "") {
        document.getElementById("userfield").innerHTML = "This is required  field"
        document.getElementById("username").style.border = "1px solid red"
        isvalid = false
    }


    if (email === "") {
        document.getElementById("emailfield").innerHTML = "This is required  field"
        document.getElementById("email").style.border = "1px solid red"
        isvalid = false
    }


    if (message === "") {
        document.getElementById("msgfield").innerHTML = "This is required field"
        document.getElementById("msg").style.border = "1px solid red"
        isvalid = false
    }

    if(isvalid){

    
        let feedbackData = {
            username: username,
            email: email,
            msg: msg
        }

        console.log(feedbackData);

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("msg").value = ""

        alert("your Form has been sumitted! Thankyou")

}
    

}