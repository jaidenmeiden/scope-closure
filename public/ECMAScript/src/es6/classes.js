console.log('##########################################################################################################');
console.log('################################################ Classes #################################################');
class calculator  {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(14, 7));
console.log('##########################################################################################################');
console.log('################################################ Modules #################################################');
import message from './modules/defaultExport.js'

console.log(message())

import { cube, foo, graph } from './modules/export.js'

graph.options = {
    color:'blue',
    thickness:'3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888
