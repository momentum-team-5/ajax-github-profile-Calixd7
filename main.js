let url = "https://api.github.com/users/Calixd7"
const targetEl = document.querySelector('#user-name')


fetch (url)
.then (response => response.json())
.then (data => {
    console.log (data)
})


fetch(url)
    .then(res => res.json())
    .then(data => {
        let h2 = document.createElement ('h2')
        h2.innerText = data.login
        targetEl.appendChild(h2)
        
    }
        )  
             fetch (url)
        .then(res => res.json())
        .then(data =>{
            const headerEl =document.createElement('h')
            headerEl.innerText = data.name
            targetEl.appendChild(headerEl)
        })

        fetch(url)
    .then(res => res.json())
    .then(data => {
        const nameEl = document.createElement('n')
        nameEl.innerText = `Name ${data.name}`
        targetEl.appendChild(nameEl)
    })
    fetch(url)
    .then(res => res.json())
    .then(data => {
    let companyEl = document.createElement('m')
    companyEl.innerText = `@${data.company}`
    targetEl.appendChild(companyEl)
    })
    fetch(url)
    .then(res => res.json())
    .then(data => {
    let bioEl = document.createElement('b')
    bioEl.innerText = data.bio
    targetEl.appendChild(bioEl)
    })

    fetch(url)
    .then(res => res.json())
    .then(data => {
    let locationEl = document.createElement('l')
    locationEl.innerText = data.location
    targetEl.appendChild(locationEl)
    })

