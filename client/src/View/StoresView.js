"use strict"
import View from './View';

export default class StoresView extends View {
    show(data)
    {
        let output = "";
        for (let store of data.stores) {
            output = output + `${store.name} ${store.street} ${store.city} ${store.zip}\n`;
        }
        super.show(output);
    }
}