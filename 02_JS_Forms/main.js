const addElement = (e, node,txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);
    
    if (txt){
    
    const text = document.createTextNode(txt);
    element.appendChild(text);
    }
    if(attr){
    element.setAttribute(attr, value);
    }
    
    document.querySelector('.content').appendChild(element);
}

const searchElements = (event, nameElement) => {
    event.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = document.querySelectorAll(nameElement);
    
    if(elements.length){
        infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znalazłem ${elements.length} elementów <strong>${nameElement}</strong></p>`;
        showInfo(elements, infoElement);
    }
    else {
        infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie nie znalazłem elementów <strong>${nameElement}</strong></p>`
        return;
    }
    
    
};

const showInfo = (elements, infoElement) => {
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>Klasa/klasy: ${element.className}</div>
        <div>Wysokość elementu:${element.offsetHeight}</div>
        <div>Szerokość elementu: ${element.offsetWidth}</div>
        <div>Odległość od lewej krawędzi: ${element.offsetLeft}</div>
        <div>Odległość od górnej krawędzi: ${element.offsetTop}</div>
        <div>Liczba elementów dzieci: ${element.childElementCount}</div>
        `
        infoElement.appendChild(item);
    });
};

//listenery

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.txt.value,
    addForm.elements.attr.value,
    addForm.elements.value.value

))


const searchForm = document.querySelector('.form--search'); 
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));