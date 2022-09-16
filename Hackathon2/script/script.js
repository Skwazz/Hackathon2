const form = document.getElementById("form");
function submitPost(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("postBody").value;
  console.log(title, body);
}
