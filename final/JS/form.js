document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value;
    const factions = document.getElementById('Fac').value;
    const phone = document.getElementById('phone').value;

    // if (!first){
    //     alert("please type your name la")
    //     return;
    // }

    // if (!last){
    //     alert("please type your name la")
    //     return;
    // }



    

    const date = {
        Name: name,
        Email:  email,
        Factions: factions,
        Phone: phone
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", ture );
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8")
    xhr.onreadystatechange = function (){
        if (xhr.readyState ===4 && xhr.status ===200) {
            const response = JSON.parse (xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
        } else if (xhr.readyState ===4) {
            alert('Error submitting form.')
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});