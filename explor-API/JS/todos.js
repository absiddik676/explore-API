function lodeTodos(params) {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>showToDos(data))
}
lodeTodos()
function showToDos(data) {
    const toDosContainer =  document.getElementById('todous-container')
    for(const todo of data){
        const div = document.createElement('div')
        div.innerHTML  =   `
        <h3>${todo.title}</h3>
        <h2>${todo.userId}</h2>
        <p>Is Completed:  ${todo.completed == true ? 'YES':'NO'} </p>
        `
        toDosContainer.appendChild(div)
    }
}
