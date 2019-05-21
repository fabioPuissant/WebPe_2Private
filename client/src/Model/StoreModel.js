"use strict";

export default class StoreModel {
    constructor(url) {
        this.url = url;
    }

    listStores() {
        return fetch(
            url, {
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
                        throw `error with status ${response.status}`;
                    }
                }
            );
    }

    addStore(name, phone, city, zip) {
        if (!(this.testIsStringValid(name))) {
            return Promise.reject(new Error("Name should be of type string with min length of 2"));
        }

        if (!(this.testIsStringValid(phone))) {
            return Promise.reject(new Error("Phone should be of type string with min length of 2"));
        }

        if (!(this.testIsStringValid(city))) {
            return Promise.reject(new Error("City should be of type string with min length of 2"));
        }

        if (!(this.testIsStringValid(zip))) {
            return Promise.reject(new Error("Zip should be of type string with min length of 2"));
        }
        let store = {
            name: name,
            phone: phone,
            city: city,
            zip: zip
        };
        return fetch(this.url, {
            method: "POST", body: JSON.stringify(store)
        }).then((respons) => {
            if (respons.status !== 201 && respons.status !== 200) {
                throw new Error("POST: rejected" + respons.status);
            }

            return respons.json();
        })
    }

    updateStore(id, name, phone, city, zip) {
        if (id >= 0) {
            return Promise.reject((new Error("ID must be greather than 0!")));
        }
        if (!(this.testIsStringValid(name))) {
            return Promise.reject(new Error("Name should be of type string with min length of 2"));
        }

        if (!(this.testIsStringValid(phone))) {
            return Promise.reject(new Error("Phone should be of type string with min length of 2"));
        }

        if (!(this.testIsStringValid(city))) {
            return Promise.reject(new Error("City should be of type string with min length of 2"));
        }

        if (!(this.testIsStringValid(zip))) {
            return Promise.reject(new Error("Zip should be of type string with min length of 2"));
        }
        let store = {
            id: id,
            name: name,
            phone: phone,
            city: city,
            zip: zip
        };
        return fetch(this.url, {
            method: "PUT", body: JSON.stringify(store)
        }).then((respons) => {
            if (respons.status !== 201 && respons.status !== 200) {
                throw new Error("PUT: rejected" + respons.status);
            }

            return respons.json();
        })
    }

    testIsStringValid(data) {
        if (!(typeof data === 'string')) {
            return false;
        }

        if (data.length <= 1) {
            return false;
        }
    }


}