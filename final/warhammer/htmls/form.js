document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value;
    const factions = document.getElementById('Fac').value;
    const phone = document.getElementById('phone').value;


    if (!name){
        alert("Type your name")
        return;
    }

    if(!email){
        alert("Type your email")
        return;
    }

    if(!factions){
        alert("Please choose")
        return;
    }

    if(!phone){
        alert("Please type your phone number")
        return;
    }

    

    const data = {
        Name: name,
        Email:  email,
        Factions: factions,
        Phone: phone
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type","application/json;=UTF-8")
    xhr.onreadystatechange = function (){
        if (xhr.readyState ===4 && xhr.status ===200) {
            const response = JSON.parse (xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            alert(response.message);
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState ===4) {
            alert('Error submitting form.')
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});