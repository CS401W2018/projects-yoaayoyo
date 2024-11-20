document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");
    
    const first = document.getElementById('firstname').value; 
    const last = document.getElementById('lastname').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const class1 = document.getElementById('class1').value;
    const class2 = document.getElementById('class2').value;
    const class3 = document.getElementById('class3').value;
    const class4 = document.getElementById('class4').value;
    const comment = document.getElementById('comment').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!first || !last) {
        alert("Please enter both first and last names.");
        return;
    }

    if (age<=8){
        alert("you too young go home")
        return;
    }

    const data = {
        firstName: first,
        lastName: last,
        password: password,
        age:age,
        classyears:{
            year1: class1,
            year2:class2,
            year3:class3,
            year4:class4,
        },
        comment: comment,
        email: email,
        phone: phone,


    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true );
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8")
    xhr.onreadystatechange = function (){
        if (xhr.readyState ===4 && xhr.status ===200) {
            const response = JSON.parse (xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState ===4) {
            alert('Error submitting form.')
        }
    };
    console.log(data);
    xhr.send(JSON.stringify(data));

});