import { people } from './people.js';
import ( planets ) from './planets.js';

console.log(people)

people.map(people => {console.log(people)
})

function append (parent, el) {
    return parent.appendChild(el);
}

const names = document.getElementById('names');

let li = createNode('li'),
img = createNode('img'),
span = createNode('span'),

img.src= people.name;
span.innerHTML = `${people.name} ${people.homeworld}`
append(li, img);
append(li, span);
append(ul, li);
