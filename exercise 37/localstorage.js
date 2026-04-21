const form = document.getElementById("postForm");
const postsContainer = document.getElementById("posts");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;

    const post = { title, image, content };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));

    form.reset();

    displayPosts();
});

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("post");

        div.innerHTML = `
            <h3>${post.title}</h3>
            ${post.image ? `<img src="${post.image}">` : ""}
            <p>${post.content}</p>
        `;

        postsContainer.appendChild(div);
    });
}

window.onload = displayPosts;