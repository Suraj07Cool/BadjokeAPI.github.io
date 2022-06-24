//Promises
//2 condition success and fail
//success--fulfilled
//fail--rejected
//then then
//GET https://icanhazdadjoke.com/slack
const jokes = document.getElementById('jokes')
const jokebtn = document.getElementById('btn')
generatejokes = () => {

    fetch('https://icanhazdadjoke.com/slack')
        .then(response => response.json())
        .then(json => jokes.innerHTML = json.attachments[0].fallback)
}

jokebtn.addEventListener('click', generatejokes)
generatejokes();