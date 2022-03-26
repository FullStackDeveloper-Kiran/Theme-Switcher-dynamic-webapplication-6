let userInputEle = document.getElementById('themeUserInput');
let bgContainer = document.getElementById('bgContainer');
let headingEle = document.getElementById("heading");
let lightThemeUrl = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeUrl = "URL('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event) {
    if (event.key === "Enter") {
        let userInput = userInputEle.value;
        console.log(userInput);
        if (userInput === "LIGHT" || userInput === "light") {
            bgContainer.style.backgroundImage = lightThemeUrl;
            headingEle.style.color = "#014d40";
        } else if (userInput === "dark") {
            bgContainer.style.backgroundImage = darkThemeUrl;
            headingEle.style.color = "white";
        } else {
            alert("Enter valid input");
        }
    }
}
userInputEle.addEventListener('keydown', changeTheme);
