"use strict";

export default class View {
    constructor()
    {
        this.outputElement = document.getElementById('storeTableBody');

    }

    show(data)
    {
        //blaaaaaa
        while (this.outputElement.hasChildNodes()) {
            this.outputElement.removeChild(this.outputElement.firstChild);
        }

        this.outputElement.appendChild(data);
    }
}