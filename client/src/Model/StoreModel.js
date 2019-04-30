"use strict";

export default class StoreModel {
    constructor(url) {
        this.url = url;
    }

    listStores() {
        fetch(url, {
            method: "GET",
            headers: {
                "accept": "application/json"
            }
        })
            .then((response) => {
                if(response.status == 200) {
                    return response.json();
                } else {
                    throw `error with status ${response.status}`;
                }
            });
    }
}