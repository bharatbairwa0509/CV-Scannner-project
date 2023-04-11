console.log('this is file no 45');
const data =[
{
    name:   'preadeep kumar rohil',
    age:    22,
    city:   "jaipur",
    image:    "https://randomuser.me/api/portraits/men/72.jpg",
    language:   'python'
},
{
    name:   'mohit bairwa',
    age:    20,
    city:   "Bandikui",
    image:    "https://randomuser.me/api/portraits/men/73.jpg",
    language:   'java'
},
{
    name:   'naman bandhu',
    age:    22,
    city:   "rewari",
    image:    "https://randomuser.me/api/portraits/men/74.jpg",
    language:   'javascript'
},
{
    name:   'bharat bairwa',
    age:    20,
    city:   "jaipur",
    image:    "https://randomuser.me/api/portraits/men/75.jpg",
    language:   'GO'
},
{
    name:   'yadu bandhu',
    age:    22,
    city:   "kolkata",
    image:    "https://randomuser.me/api/portraits/men/76.jpg",
    language:   'c++'
},
{
    name:   'Dhurv kaka',
    age:    17,
    city:   "delhi",
    image:    "https://randomuser.me/api/portraits/men/77.jpg",
    language: 'javascript'
}
]
function cvITerators(profile) {
    let nextIndex = 0;
    return {
        next: function() {

        return  nextIndex<profile.length ?
            {
                value: profile[nextIndex++],done:false}
                :{done:true}
            }
    };
}
let mk= cvITerators(data);
// console.log(currentprofile);
const next = document.getElementById("next");
next.addEventListener("click",nextCV);
function nextCV() {
    
    const currentprofile = mk.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
   
    
    if(currentprofile!=undefined)
    {
        image.innerHTML = `<img src='${currentprofile.image}'>`;
        profile.innerHTML= `<ul class="list-group">
        <li class="list-group-item">Name: ${currentprofile.name}</li>
        <li class="list-group-item">${currentprofile.age} years old</li>
        <li class="list-group-item">Lives in ${currentprofile.city}</li>
        <li class="list-group-item">Primarily works on ${currentprofile.language}</li>
      </ul>`;
    }
    else{
        alert("end of candidates application");
        window.location.reload();
    }


}








