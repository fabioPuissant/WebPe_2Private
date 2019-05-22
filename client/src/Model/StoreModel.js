"use strict";
export default class StoreModel {

    constructor(givenUrl) {
        this.url = "192.168.33.22/api/stores";
    }

    listStores(url) {
         return fetch(
            url, {
                method: "GET",
                headers: {
                    "accept": "application/json",
                }
            }
        )
            .then(
                (response) => {
                    if (response.status >= 200 && response.status < 300) {
                         return response.json();
                    } else {
                        throw `error with status ${response.status}`;
                    }
                }
            );
    }

    listStore(url, id){
        return fetch(
            (url+id), {
                method: "GET",
                headers: {
                    "accept": "application/json"
                }
            }
        )
            .then(
                (response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw `error with status ${response.status}  ${response.data}`;
                    }
                }
            );
    }

    addStore(url, name, phone, city, zip) {

        let store = {
            name: name,
            phone: phone,
            city: city,
            zip: zip
        };
        return fetch(url, {
            method: "POST", body: JSON.stringify(store)
        }).then((respons) => {
            if (respons.status !== 201 && respons.status !== 200) {
                throw new Error("POST: rejected" + respons.status);
            }

            return respons.json();
        })
    }

    updateStore(url, id, name, phone, city, zip) {

        let store = {
            id: id,
            name: name,
            phone: phone,
            city: city,
            zip: zip
        };
        return fetch(url, {
            method: "PUT", body: JSON.stringify(store)
        }).then((respons) => {
            if (respons.status !== 201 && respons.status !== 200) {
                throw new Error("PUT: rejected" + respons.status);
            }

            return respons.json();
        })
    }

    testIsStringValid(data) {
        if ((typeof data === 'undefined')) {
            return false;
        }

        if (data.length <= 1) {
            return false;
        }
    }


}