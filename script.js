// 🎅 Correio do Noel

const form = document.getElementById("form-noel");
const resposta = document.getElementById("resposta");

// Ao enviar a carta
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const pedido = document.getElementById("pedido").value.trim();

    if (!nome || !idade || !pedido) return;

    const mensagem = `Ho ho ho, ${nome}! 🎅  
    Recebi seu pedido de Natal e prometo tentar realizar:  
    “${pedido}” — direto do Polo Norte! 🎄`;

    resposta.textContent = mensagem;
    resposta.classList.remove("hidden");

    // salva no localStorage
    const cartas = JSON.parse(localStorage.getItem("cartasNoel")) || [];
    cartas.push({ nome, idade, pedido, data: new Date().toLocaleString() });
    localStorage.setItem("cartasNoel", JSON.stringify(cartas));

    form.reset();
});

// 🌠 Fundo estrelado
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5,
        s: Math.random() * 1 + 0.2,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.s;
        if (star.y > canvas.height) star.y = 0;
    }
    requestAnimationFrame(drawStars);
}
drawStars();