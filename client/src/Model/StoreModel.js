"use strict";
export default class StoreModel {

    constructor(givenUrl) {
        this.url = "192.168.33.22/api/stores/";
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
                    }
                    throw `error with status ${response.status}`;
                }
            );
    }

    listStore(url, id) {
        let urlOf = url + id;
        return fetch(
            (urlOf), {
                method: "GET",
                headers: {
                    "accept": "application/json"
                }
            }
        )
            .then(
                (response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    throw `error with status ${response.status}  ${response.data}`;
                }
            );
    }

    addStore(url, name, phone, city, zip) {
        console.log("In Addstore");
        let store = {
            store: {
                name: name,
                phone: phone,
                city: city,
                zip: zip
            }
        };
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(store)
        }).then((respons) => {
            if (respons.status !== 201 && respons.status !== 200) {
                throw new Error("POST: rejected" + respons.status);
            }
        }).catch(error => console.log(error));
    }

    updateStore(url, id, name, phone, city, zip) {

        let store = {
            store: {
                id: id,
                name: name,
                phone: phone,
                city: city,
                zip: zip
            }
        };
        let putUrl = url + id;
        return fetch(putUrl, {
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