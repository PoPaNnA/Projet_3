const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", event => {
    e.preventDefault();
}) 

 const email = document.getElementById("email");
 const password = document.getElementById("password");

 function valider(){
    if (document.inputSaisie.email.value != ""){
        document.inputSaisie.submit();
        window.location.replace("index.html");
    } else {
        alert ("Erreur dans l'identifiant ou le mot de passe");
        window.location.replace("login.html");
    }
}

let login = {
    email: "string",
    password: "string"
  };

        const response = await fetch('http://localhost:5678/api/users/login', {
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(login)
        });

        let result = await response.json();
        alert(result.message);

       

























