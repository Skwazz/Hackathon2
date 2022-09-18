const articleDiv = document.getElementById("welcomeArticles");

async function allArticles() {
  const articles = await fetch("/getarticles");
  const jsoned = await articles.json();
  return jsoned;
}

function renderPosts(arr) {
  for (let i = 0; i < 3; i++) {
    const postDiv = document.createElement("div");
    const title = document.createElement("h1");
    const body = document.createElement("p");
    title.textContent = arr[i].title;
    body.textContent = arr[i].body;
    postDiv.setAttribute("class", "landingPosts");
    title.setAttribute("class", "landingTitle");
    body.setAttribute("class", "landingBody");
    postDiv.append(title, body);
    articleDiv.append(postDiv);
    console.log(arr[i].title);
  }
}

allArticles()
  .then((res) => {
    return res;
  })
  .then((res) => {
    renderPosts(res);
  });

// arr.forEach((post) => {
//   const postDiv = document.createElement("div");
//   const title = document.createElement("h1");
//   const body = document.createElement("p");
//   const date = document.createElement("p");
//   title.textContent = post.title;
//   body.textContent = post.body;
//   date.textContent = post.date_data;
//   posts.append(postDiv);
//   postDiv.append(title, body, date);
// });
