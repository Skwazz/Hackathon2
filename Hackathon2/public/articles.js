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
    const posts = document.getElementById("posts");
    const postDiv = document.createElement("div");
    postDiv.classList.add("newPost");
    const title = document.createElement("h1");
    const body = document.createElement("p");
    const date = document.createElement("p");
    const category = document.createElement("span");
    category.classList.add("category");
    title.textContent = post.title;
    body.textContent = post.body;
    date.textContent = post.date_data.slice(0, 10);
    category.textContent = post.category;
    posts.append(postDiv);
    postDiv.append(title, body, date, category);
  });
}
