function lodeUsers2(params) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUses(data))
}

function displayUses(data) {
    const ul = document.getElementById('user-name')
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    }
}

