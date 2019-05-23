"use strict";

export default class StoreController {
    constructor(storeModel, storesView, errorView) {
        this.storeModel = storeModel;
        this.storesView = storesView;

    }

    listStores(url) {
        let promise = this.storeModel.listStores(url);
        promise.then((stores) => {
                this.storesView.show({stores: stores});
            }
        ).catch(error => {
            console.log(error);
            }
        )
    }

    listStore(url, id) {
        let promise = this.storeModel.listStore(url,id);
        promise.then((store) => {
            this.storesView.show({stores: store});
        })
            .catch(error =>
                console.log(error)
            );
    }

    addStore(url, name, phone, city, zip) {
        let promise = this.storeModel.addStore(url, name, phone, city, zip);
        promise.then((store) => {
            //this.storesView.show({store: store});
        }).catch(error => {
            console.log(error);
        });
    }

    saveStore(url, id, name,phone, city, zip){
        let promise = this.storeModel.updateStore(url, id, name, phone, city, zip);
        promise.then((store) => {
            //this.storesView.show({store: store});
        }).catch(error => {
            console.log(error);
        });
    }
}