//Collection input
let PackageId = document.querySelector("#packageIndex");
let PackageUser = document.querySelector("#userPackage");
let FullName = document.querySelector("#fullName");
let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let comword = document.querySelector("#confirmPassword");

//collectoin input values
let store = window.localStorage
function signup() {
    if (Password.value === comword.value && Email.value.includes('@') ) {
        localStorage.setItem('packId', PackageId.value);
        localStorage.setItem('packUser', PackageUser.value);
        localStorage.setItem('fname', FullName.value);
        localStorage.setItem('email', Email.value);
        localStorage.setItem('password', Password.value);
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            console.log(`${key}: ${localStorage.getItem(key)}`);
        }
    } else {
        alert("Yello Please check your details value again and Register")
    }
}
