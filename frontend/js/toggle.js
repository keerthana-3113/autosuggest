var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "/images/john.png"
    }, 
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "/images/image.png"
    }
]
var cur = 0;

function toggle(){
    cur = (cur + 1) % 2;
    //toggle the rendered user details between the two users in the users array
    //image update
    var user=users[cur];
    document.getElementById("user-img").src = user.image;

    //to update the name and the gender
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;
}