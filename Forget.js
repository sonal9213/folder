document.getElementById("update").addEventListener("click", (event) => {
    console.log("system....");
    event.preventDefault(); // prevent form from submitting
    let value=false;
    const username = document.getElementById('username1').value;
    const password = document.getElementById('password1').value;
    const email=document.getElementById('email1').value;
    let users = JSON.parse(localStorage.getItem('users_credential'));
    let obj1={
        name:username,
        pass:password,
        email:email
    }
    if(users==null){
        alert("No username and Email id Exist");
    }
    else{
        for (i = 0; i < users.length; i++) {
            if (users[i].name == username) {
                if (users[i].email == email) {
                    console.log("corect");
                    users.push(obj1);
                    localStorage.setItem('users_credential', JSON.stringify(users));
                    alert("Password change Successfully");
                    window.location.assign("Login.html");
                    value=true;
                    return;
                }

            }
            

    }
    if(value!=true){
        alert("User or Email Does Not Exist");
        window.location.assign("SignUp.html");
    }
    
}

// localStorage.setItem('All_users', JSON.stringify());
})