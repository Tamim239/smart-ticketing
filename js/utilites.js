function textInner(elements, value){
const element = document.getElementById(elements);
element.innerText = value
}

// parseInt
function setTextParseInt(elements){
    const element = document.getElementById(elements);
    const convertElement = element.innerText;
    const parseIntValue = parseInt(convertElement);
    return parseIntValue;
}

// return value
function getAmountValue(elements, value){
    const element = document.getElementById(elements)
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = "discount";
        const p2 = document.createElement("p");
       p2.innerText = value;
        // append
        div.appendChild(p);
        div.appendChild(p2);
        element.appendChild(div);
        return value ;
    }

// disabled btn
function disabledByBtn(elements){
    const element = document.getElementById(elements);
    element.setAttribute("disabled", true);
}
// enable btn
function enabledByBtn(elements){
    const element = document.getElementById(elements);
    element.removeAttribute("disabled", true);
}

// hidden class remove
function setHiddenRemoveClass(elements){
    const element = document.getElementById(elements);
    element.classList.remove("hidden");
}

// hidden class add class use
function setHiddenAddClass(elements){
    const element = document.getElementsByClassName(elements);
    for(const hide of element){
        hide.classList.add("hidden"); 
    }   
}
