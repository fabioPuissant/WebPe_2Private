"use strict"
import View from './View';

export default class StoresView extends View {
    show(data)
    {
        let output = "";
        for (let store of data.stores) {
            output = output +
                '<tr><td>'+
                `${store.name}</td><td>` +
            `${store.phone}</td><td>` +
            `${store.city}</td><td>`+
            `${store.zip}</td></tr>`;
        }
        super.show(output);
    }
}