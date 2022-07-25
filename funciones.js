console.log("funciones cargadas");

const text = document.querySelector('.text-imagen p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.9}deg)">${char}</span>`
).join("")