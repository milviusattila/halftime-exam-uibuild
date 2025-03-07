const rootElement = document.getElementById('root')

const generateHtml = () => {
    return `
    <h1>Visszajelzés</h1>
        <input type="input" placeholder="Tárgy">
        <textarea placeholder="Megjegyzés"></textarea>
            <div class="inner-div">
                <input type="checkbox"><label>Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót</u>.</label>
            </div>
            <div class="inner-div">
                <input type="checkbox"><label>Szeretnék hírlevelet kapni.</label>
            </div>
    <button>MENTÉS</button>
    `
}

const loadEvent = () => {
    rootElement.insertAdjacentHTML("beforeend", generateHtml())
}

window.addEventListener("load", loadEvent())
