function attachEvents() {
    let postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentUrl = 'http://localhost:3030/jsonstore/blog/comments';
    let allAvailablePostsElements = document.getElementById('posts')
    let h1Element = document.getElementById('post-title');
    let pElement = document.getElementById('post-body');
    let ulElement = document.getElementById('post-comments');

    let getButGetPostEl = document.getElementById('btnLoadPosts');
    getButGetPostEl.addEventListener('click', loadPostsEvent);

    let getButViewPostEl = document.getElementById('btnViewPost');
    getButViewPostEl.addEventListener('click', viewPostsEvent);

    allPosts = {};


    async function loadPostsEvent() {
        allAvailablePostsElements.innerHTML = '';
        let allPostResponse = await fetch(postUrl);
        allPosts = await allPostResponse.json();

        // console.log(allPosts); for debugging purposes

        for (let el of Object.entries(allPosts)) {
            let optionEl = document.createElement('option');
            optionEl.textContent = el[1].title;
            optionEl.value = el[0];
            allAvailablePostsElements.appendChild(optionEl);

            // console.log(el)
        }
    }
    async function viewPostsEvent() {
        let currentPostComments = [];

        let allCommentResponse = await fetch(commentUrl);
        let allComments = await allCommentResponse.json()

        for (let i of Object.entries(allComments)) {
            if (i[1].postId === allAvailablePostsElements.value) {
                currentPostComments.push([i[1].text, i[1].id])
            }
        }
        let currentPost = allPosts[allAvailablePostsElements.value];
        h1Element.textContent = currentPost.title
        pElement.textContent = currentPost.body
        ulElement.innerHTML = '';

        for (let comment of currentPostComments) {
            let liElement = document.createElement('li', 'id[]');
            liElement.textContent = comment[0];
            liElement.setAttribute('id', comment[1])
            ulElement.appendChild(liElement);
        }
        // console.log(currentPost)
    }
}

attachEvents();