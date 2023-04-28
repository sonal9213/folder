document.getElementById('LogIn').addEventListener("click", (event) => {
    event.preventDefault();
    let value = false;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users_credential'));
    console.log(users);
    if (users != null) {
        for (i = 0; i < users.length; i++) {
            if (users[i].name == username) {
                if (users[i].pass == password) {
                    alert('Login Succesfully');
                    window.location.assign("language.html");
                    return;
                }
            }
           
        }
        if (value == false) {
            alert('Incorrect Name and Password. You can sign Up if uh r visiting for the first Time');
            window.location.assign("Login.html");
        }
    }
    else {
        alert('User not exist');
    }

})