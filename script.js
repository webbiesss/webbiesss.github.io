const heart = document.getElementById("heart");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const footer = document.getElementById("footer");
const revealedImage = document.getElementById("revealed-image");

heart.addEventListener("click", () => {
    createHeartBurst();

    setTimeout(() => {
        heart.classList.add("split-left");
        heart.classList.add("split-right");

        revealedImage.classList.remove("hidden");
        title.classList.remove("hidden");
        subtitle.classList.remove("hidden");
        footer.classList.remove("hidden");
    }, 800);
});

function createHeartBurst() {
    for (let i = 0; i < 40; i++) {
        const tinyHeart = document.createElement("div");
        tinyHeart.classList.add("tiny-heart");
        document.body.appendChild(tinyHeart);

        const size = Math.random() * 20 + 10;
        tinyHeart.style.width = `${size}px`;
        tinyHeart.style.height = `${size}px`;

        tinyHeart.style.left = `${window.innerWidth / 2}px`;
        tinyHeart.style.top = `${window.innerHeight / 2}px`;

        const angle = Math.random() * 360;
        const distance = Math.random() * 300 + 100;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        tinyHeart.animate(
            [
                { transform: `translate(0,0)`, opacity: 1 },
                { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
            ],
            {
                duration: 1500 + Math.random() * 1000,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        setTimeout(() => tinyHeart.remove(), 2500);
    }
}

// Tiny heart styling
const style = document.createElement("style");
style.innerHTML = `
.tiny-heart {
    position: absolute;
    background: red;
    transform: rotate(-45deg);
    border-radius: 50%;
}
.tiny-heart:before,
.tiny-heart:after {
    content: "";
    position: absolute;
    background: red;
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.tiny-heart:before {
    top: -50%;
}
.tiny-heart:after {
    left: 50%;
}
`;
document.head.appendChild(style);
