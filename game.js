const player = document.getElementById("player");
const game = document.getElementById("game");

let x = 180;
let y = 180;
let score = 0;
const speed = 20;

// Créer cadeaux
for (let i = 0; i < 5; i++) {
  const gift = document.createElement("div");
  gift.className = "gift";
  gift.textContent = "🎁";
  gift.style.left = Math.random() * 350 + "px";
  gift.style.top = Math.random() * 350 + "px";
  game.appendChild(gift);
}

// Déplacements
function move(direction) {
  if (direction === "up") y -= speed;
  if (direction === "down") y += speed;
  if (direction === "left") x -= speed;
  if (direction === "right") x += speed;

  x = Math.max(0, Math.min(360, x));
  y = Math.max(0, Math.min(360, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkCollision();
}

// Clavier PC
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
});

// Collision cadeaux
function checkCollision() {
  document.querySelectorAll(".gift").forEach(gift => {
    const gx = gift.offsetLeft;
    const gy = gift.offsetTop;

    if (Math.abs(x - gx) < 30 && Math.abs(y - gy) < 30) {
      gift.remove();
      score++;

      if (score === 5) {
        window.location.href = "victory.html";
      }
    }
  });
}
