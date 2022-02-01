console.log('##########################################################################################################');
console.log('########################################## dynamic import ################################################');

const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.information();
})