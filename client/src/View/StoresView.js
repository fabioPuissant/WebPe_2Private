"use strict"
import View from './View';

export default class StoresView extends View {

    show(data)
    {
        while (this.outputElement.hasChildNodes()) {
            this.outputElement.removeChild(this.outputElement.firstChild);
        }

        let outputElement = document.getElementById('storeTableBody');
        let container = document.createElement("div")

        for (let store of data.stores) {
            let row = document.createElement("tr");
            let name = document.createElement('td');
            name.innerText = store.name;
            let phone = document.createElement('td');
            phone.innerText = store.phone;
            let city = document.createElement('td');
            city.innerText = store.city;
            let zip = document.createElement("td");
            zip.innerText = store.zip;

            row.appendChild(name);
            row.appendChild(phone);
            row.appendChild(city);
            row.appendChild(zip);
            outputElement.appendChild(row);
        }
    }
}