import { people } from './people.js';

console.log(people)

people.map(people => {console.log(people)
})

function append (parent, el) {
    return parent.appendChild(el);
}

