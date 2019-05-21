"use strict";

export default class StoreController {
    constructor(storeModel, storesView, errorView) {
        this.storeModel = storeModel;
        this.storesView = storesView;
        this.errorView = errorView;
    }

    listStores() {
        let promise = this.storeModel.listStores();
        promise.then((stores) => {
                this.storesView.show({stores: stores});
            }
        ).catch(error => {
                this.errorView.show({error: error.message()});
            }
        )
    }

    listStore(id) {
        let promise = this.storeModel.listStore(id);
        promise.then((store) => {
            this.storesView.show({stores: store});
        })
            .catch(error =>
                this.errorView.show({error: error.message()})
            );
    }

    addStore(name, phone, city, zip) {
        let promise = this.storeModel.addStore(name, phone, city, zip);
        promise.then((store) => {
            this.storesView.show({store: store});
        }).catch(error => {
            this.errorView.show({error: error.message});
        });
    }

    saveStore(id, name,phone, city, zip){
        let promise = this.storeModel.saveStore(id, name, phone, city, zip);
        promise.then((store) => {
            this.storesView.show({store: store});
        }).catch(error => {
            this.errorView.show({error: error.message});
        });
    }
}