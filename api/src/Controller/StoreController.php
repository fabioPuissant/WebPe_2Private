<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 20:51
 */

namespace Controller;

use model\PDOStoreModel;
use view\MultipleStores;
use view\SingleStore;

class StoreController
{
    private $storeModel;
    private $jsonStoresView;
    private $jsonStoreView;

    /**
     * StoreController constructor.
     * @param PDOStoreModel $storeModel
     */
    public function __construct(PDOStoreModel $storeModel, MultipleStores $jsonStoresView, SingleStore $jsonStoreView)
    {
        $this->storeModel = $storeModel;
        $this->jsonStoresView = $jsonStoresView;
        $this->jsonStoreView = $jsonStoreView;
    }

    public function listStores()
    {
        $statuscode = 200;
        $stores = [];
        $problem = "";
        try {
            $stores = $this->storeModel->ListAllStores();
        } catch (\PDOException $exception) {
            $statuscode = 500;
            $problem = $exception;
        }
        $this->jsonStoresView->show(["stores" => $stores, "statuscode => $statuscode", "problem" => $problem]);
    }

    public function listStore($id)
    {
        $statuscode = 200;
        $stores = [];
        $problem = "";
        try {
            $stores = $this->storeModel->ListStoreById($id);
        } catch (\PDOException $exception) {
            $statuscode = 500;
            $problem = $exception;
        }
        $this->jsonStoresView->show(["stores" => $stores, "statuscode => $statuscode", "problem" => $problem]);
    }

    public function AddStore($store)
    {
        $statuscode = 200;
        try {
            $this->storeModel->AddStore($store);
        } catch (\InvalidArgumentException $exception) {
            $statuscode = 400;
            echo "invalid argument " . $exception;
        } catch (\PDOException $exception) {
            $statuscode = 500;
            echo "pdo exception " .$exception;
        }
       return;
    }

    public function UpdateStore($id, $store)
    {
        $statuscode = 200;
        $stores = [];
        $problem = "";
        try {
            $this->storeModel->UpdateStore($id, $store);
        } catch (\PDOException $exception) {
            $statuscode = 500;
            echo "Pdo Exception by PUT: " . $exception;
        }
        //$this->jsonStoresView->show(["stores" => $stores, "statuscode => $statuscode", "problem" => $problem]);
    }
}
