import { people } from './people.js';
import { planets } from './planets.js';

console.log(people);
console.log(planets);

function append (parent, el) {
    return parent.appendChild(el);
}

function createNode(element) {
    return document.createElement(element);
}

let characters;
let planet;

const ul = document.getElementById('characters')

people.map(character => {console.log(character.name)
    let li = createNode('li'),
    span = createNode('span');

    span.innerHTML = `Character Name & Eye Color: ${character.name} - ${character.eye_color}`;

    append(li,span);
    append(ul,li);

    document.getElementById("characters").style.color = "black";
    document.getElementById("characters").style.backgroundColor = "white";
    document.getElementById("characters").style.overflow = "scroll";
})

const ol = document.getElementById('planets')

planets.map(planet => {console.log(planet.name)
    let li = createNode('li'),
    span = createNode('span');

    span.innerHTML = `Planet Description: ${planet.name}: ${planet.terrain}`;

    append(li,span);
    append(ol,li);

    document.getElementById("planets").style.color = "green";
    document.getElementById("planets").style.backgroundColor = "white";
    document.getElementById("planets").style.overflow = "scroll";
   
})









