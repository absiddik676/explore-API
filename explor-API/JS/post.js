function lodePost(params) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showPost(data))
}
lodePost()


function showPost(data) {
    const postContainer = document.getElementById('post-container')
    for(const post of data){
        console.log(post);
        const div = document.createElement("div")
        div.classList.add('post')
        div.innerHTML = `
            <h3>User-${post.userId}</h3>
            <h5>Post title-${post.title}</h5>
            <p>Post description- ${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}
