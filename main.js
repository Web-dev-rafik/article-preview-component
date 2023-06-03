const articleButton = document.getElementById("article-button");
const articleShare = document.getElementById("article-share");
const articleShareTriangle = document.getElementById("article-share-triangle");

articleButton.addEventListener("click", () => {
  articleShare.classList.toggle("visible");
  articleShareTriangle.classList.toggle("visible");
  articleButton.classList.toggle("open");
});
