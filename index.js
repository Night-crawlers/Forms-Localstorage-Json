// let name_box = document.querySelector("#name");

// getElementById
// getElementsByClassName

let name_box = document.getElementById("name");
let email_box = document.getElementById("email");
let password_box = document.getElementById("password");
let confirm_password_box = document.getElementById("cpassword");
let btn = document.querySelector("button");
let infoDiv = document.querySelector(".info");

let form = document.querySelector("form");


// btn.addEventListener("click", validateForm)

// form => submit

form.addEventListener("submit", validateForm)


function validateForm(e) {
    e.preventDefault();
    // console.log("Button Clicked")
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let cpassword = confirm_password_box.value;

    if(name=="" || email=="" || password=="" || cpassword=="") {
        alert("Please fill all the fields")
        return
    }
    // if(name.length<4){
    //     alert("Name should be atleast 4 characters")
    //     return
    // }
    if(password != cpassword) {
        alert("Password do not match")
        return
    }
    // password should be >=8 digits
    // password should have a caps, small, number and special character
    // email => should have @ and . 

    // console.log("Form Submitted")

    infoDiv.innerHTML = `
            Name: ${name} <br>
            Email: ${email} <br>
            Password: ${password} <br>
    `
    name_box.value = "";
    email_box.value = "";
    password_box.value = "";
    confirm_password_box.value = "";
}


// events => change, input:

name_box.addEventListener("input", ()=>{
      let name_err = document.querySelector(".name-err");
      let name = name_box.value;
      console.log(name)
      if(name.length<4){
          name_box.style.outline = "2px solid red";
          name_err.innerHTML = "Name should be atleast 4 characters"
      }
      else{
            name_box.style.outline = "2px solid green";
            name_err.innerHTML = ""
      }
})


// localstorage and  JSON: 