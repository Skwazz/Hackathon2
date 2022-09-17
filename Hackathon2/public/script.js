// function login() {
//   let password = prompt("Please enter password");
//   if (password !== "password") {
//     login();
//   }
// }

// const { all } = require("../routes/articles");

// login();
const form = document.getElementById("form");
function submitPost(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("postBody").value;
  const date = new Date();
  fetch("/articles", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
      date_data: date,
    }),
  });
  form.reset();
}
async function allArticles() {
  const articles = await fetch("/getarticles");
  const jsoned = await articles.json()
  return jsoned;
}
allArticles().then((res) => {
return res;
}).then((res)=>{
  
})

