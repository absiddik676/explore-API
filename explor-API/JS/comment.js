fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayComment(data))

function displayComment(data) {
    const commentsContainer = document.getElementById('comment-container')
    for(const comment of data){
        console.log(comment);
        const div = document.createElement('div')
        div.classList.add('comments')
        div.innerHTML = `
            <h2>Name:${comment.name}</h2>
            <h4>Email:${comment.email}</h4>
            <p>${comment.body}</p>
        `
        commentsContainer.appendChild(div)
    }
}
