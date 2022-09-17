// function login() {
//   let password = prompt("Please enter password");
//   if (password !== "password") {
//     login();
//   }
// }
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
      date: date,
    }),
  });
  form.reset();
}
async function allArticles() {
  const articles = await fetch("/articles");
  const jsoned = await JSON.parse(articles);
  return jsoned;
}
allArticles().then((res) => {
  console.log(res);
});
