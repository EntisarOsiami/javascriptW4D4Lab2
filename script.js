const person = [{
    name: "Intisar",
    age: 33,
    img: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1315.jpg?w=826"
}, {
    name: "Abdulaziz",
    age: 25,
    img: "https://img.freepik.com/premium-vector/avatar-profile-picture-icon-blue-background-flat-design-style-resources-graphic-element-design_991720-653.jpg?ga=GA1.1.660481976.1745316751&semt=ais_hybrid&w=740"
}, {
    name: "Alice",
    age: 28,
    img: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1328.jpg?ga=GA1.1.660481976.1745316751&semt=ais_hybrid&w=740"
}, {
    name: "John",
    age: 35,
    img: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?ga=GA1.1.660481976.1745316751&semt=ais_hybrid&w=740"
}];



for (let i = 0; i < person.length; i++) {
    let img = document.createElement("img");
    img.width = 100;
    img.src = person[i].img;
    let name = document.createElement("p");
    name.textContent = `The user name is ${person[i].name}`;    
    document.body.appendChild(img);
    document.body.appendChild(name);
 }


