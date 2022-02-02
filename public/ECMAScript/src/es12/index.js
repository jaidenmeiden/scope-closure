console.log('##########################################################################################################');
console.log('############################################### WeakRef ##################################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef

class Counter {
    constructor(element) {
        // Remember a weak reference to the DOM element
        this.ref = new WeakRef(element);
        this.start();
    }

    start() {
        if (this.timer) {
            return;
        }

        this.count = 0;

        const tick = () => {
            // Get the element from the weak reference, if it still exists
            const element = this.ref.deref();
            if (element) {
                element.textContent = ++this.count;
            } else {
                // The element doesn't exist anymore
                console.log("The element is gone.");
                this.stop();
                this.ref = null;
            }
        };

        tick();
        this.timer = setInterval(tick, 1000);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = 0;
        }
    }
}
const counter = new Counter(document.getElementById("counter"));
setTimeout(() => {
    document.getElementById("counter").remove();
}, 21000);