let isListDisplayed = false

function displayList() {
    const fruitsElm = document.getElementById("fruits")
    const pElms = document.getElementsByTagName("p")
    const ulElm = document.createElement("ul")

    if (isListDisplayed) {
        return;
      }

    for (let i = 0; i < pElms.length; i++) {
        const pElm = pElms[i];
        const text = document.createTextNode(pElm.textContent)
        const liElm = document.createElement("li")
        
        liElm.appendChild(text)
        ulElm.appendChild(liElm)
    }
 
    fruitsElm.innerHTML = ""
    fruitsElm.appendChild(ulElm)

    isListDisplayed = true;

}