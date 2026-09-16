// const colors = await fetch('static/colors.json').then(r => r.json());

const paintButton = document.getElementById("paint-letters");
const colorList = document.getElementById("color-list");

// random colors 
function randomColor(colors, letter) {
  const choices = colors[letter];
  return choices[Math.floor(Math.random() * choices.length)];
}


function selectColors(colors_){

    // instantiate selected colors 
    const selectedColors = [];

    //randomly select a letter
    for (let i = 90; i >= 65; i--) {
        const letter = String.fromCharCode(i);

        const color = randomColor(colors_, letter);

        // add to selected colors 
        selectedColors.push({
            letter: letter,
            name: color.name,
            hex: color.hex
        });
    }

  return selectedColors;
}


function renderColors(selectedColors) {
    colorList.innerHTML = "";

    selectedColors.forEach(color => {
        const li = document.createElement("li");

        li.textContent = `${color.letter} — ${color.name}`;
        li.style.color = color.hex;

        colorList.appendChild(li);
    });
}

async function init() {
    const colors = await fetch('static/colors.json')
        .then(r => r.json());

    console.log(colors);

    const button = document.getElementById("paint-letters");

    button.addEventListener("click", () => {
        const selectedColors = selectColors(colors);
        renderColors(selectedColors);
    });
}

init();