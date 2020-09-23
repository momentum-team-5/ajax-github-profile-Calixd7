const url = 'https://api.github.com/users/calixd7'
const content = document.querySelector

fetch(url)
.then(response => response.json())
.then(data => {
 console.log(data)
})
