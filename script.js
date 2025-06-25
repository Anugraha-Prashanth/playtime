const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const nextSection = document.getElementById("nextSection");
const form = document.getElementById("impressForm");

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
  nextSection.style.display = "block";
  nextBtn.style.display = "none";
});
document.querySelectorAll('input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${Math.random() * window.innerWidth}px`;
    flower.style.bottom = `0px`;
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 2000);
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = Array.from(form.querySelectorAll('input')).map(i => i.value);
  console.log("Submitted:", data);
  alert("Thank you sweetheartt! 💌 Operation Impress You begins.");
});