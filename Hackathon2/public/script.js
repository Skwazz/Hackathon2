// function login() {
//   let password = prompt("Please enter password");
//   if (password !== "password") {
//     login();
//   }
// }

// const { all } = require("../routes/articles");

// login();

const posts = document.getElementById("posts");

const form = document.getElementById("form");

function submitPost(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("postBody").value;
  const category = document.getElementById("category").value;
  const date = new Date();
  if (title == "" || body == "") {
    alert("please fill in all the fields");
  } else {
    fetch("/articles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        category: category,
        date_data: date,
      }),
    });
    form.reset();
    window.location.reload();
  }
}

async function allArticles() {
  const articles = await fetch("/getarticles");
  const jsoned = await articles.json();
  return jsoned;
}

allArticles()
  .then((res) => {
    return res;
  })
  .then((res) => {
    renderPosts(res);
  });

function renderPosts(arr) {
  arr.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("newPost");
    const title = document.createElement("h1");
    const body = document.createElement("p");
    const date = document.createElement("p");
    const category = document.createElement("p");
    const deleted = document.createElement("button");
    const update = document.createElement("button");
    const id = post.id;
    deleted.setAttribute("onclick", `deletePost(${id})`);
    update.setAttribute("onclick", `getPost(${id})`);
    title.textContent = post.title;
    body.textContent = post.body;
    date.textContent = post.date_data.slice(0, 10);
    category.textContent = post.category;
    deleted.textContent = "x";
    update.textContent = "edit";
    posts.append(postDiv);
    postDiv.append(title, body, date, deleted, update);
  });
}

function deletePost(id) {
  let answer = confirm("Are you sure you want to delete this post ?");
  if (answer === true) {
    fetch(`/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  }
}

async function getArticle(id) {
  const articles = await fetch(`/articles/${id}`);
  const jsoned = await articles.json();
  return jsoned;
}
// getArticle()
//   .then((res) => {
//     console.log(res);
//   })

function updatePost(event, id) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("postBody").value;
  const category = document.getElementById("category").value;
  const date = new Date();

  fetch(`/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
      category: category,
      date_data: date,
    }),
  });
  form.reset();
}

function getPost(id) {
  getArticle(id).then((res) => {
    document.getElementById("title").value = res[0].title;
    document.getElementById("postBody").value = res[0].body;
  });
  const edit = document.getElementById("edit");
  const button = document.getElementById("button");
  edit.setAttribute("class", "show");
  button.setAttribute("class", "hidden");
  form.setAttribute("onsubmit", "updatePost(event)");
  form.setAttribute("method", "PUT");
  form.addEventListener("submit", function (event) {
    updatePost(event, id);
    window.location.reload();
  });
  console.log("get");
}
