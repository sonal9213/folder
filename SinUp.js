document.getElementById("signUp").addEventListener("click", (event) => {
    console.log("system....");
    event.preventDefault(); // prevent form from submitting
    let value=true;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email=document.getElementById('email').value;

    // add more fields here if needed
    let obj={
        name:username,
        pass:password,
        email:email
    }
    let detail = JSON.parse(localStorage.getItem('users_credential'))
    if (detail == null) {
        detail = [];
        detail.push(obj);
    } else {
        for(i=0;i<detail.length;i++){
            if(detail[i].email==email){
                alert("Email id Already Exist");
                value=false;
                window.location.assign("Login.html");
                return;
            }

        }
        if(value==true){
            detail.push(obj);
            alert("SignUp succesfully");
        }
        
    }
    console.log(detail);
    localStorage.setItem('users_credential', JSON.stringify(detail));
    window.location.assign("Login.html");
    });