const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const googleForm = document.getElementById("googleForm");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  message.style.display = "block";
  nextBtn.style.display = "inline-block";
});

nextBtn.addEventListener("click", () => {
  googleForm.style.display = "block";
  nextBtn.style.display = "none";
});
