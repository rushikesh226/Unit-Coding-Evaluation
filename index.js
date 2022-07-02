// All the JS Code for the Add Students Page Goes Here

document.getElementById("form").addEventListener("submit", submitEvent)

function submitEvent(){
    event.preventDefault();
    var name= document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var gender=document.getElementById("gender").value;
    var course=document.getElementById("course").value;

    var arr=[];
    arr.push(name);
    arr.push(email);
    arr.push(phone);
    arr.push(gender);
    arr.push(course);
    
    localStorage.setItem("admission", JSON.stringify(arr));
}