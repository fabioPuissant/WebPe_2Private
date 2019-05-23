<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 22:10
 */

namespace api;
require_once "../vendor/autoload.php";

use AltoRouter;
use model\PDOStoreModel;
use model\StoreModel;
use controller\StoreController;
use view\JsonStoresView;
use view\View;
use view\JsonStoreView;

$pdo = new PDOStoreModel();
$storesView = new \view\MultipleStores();
$storeView = new \view\SingleStore();
$storeController = new \controller\StoreController($pdo, $storesView, $storeView);
$router = new AltoRouter();
$router->setBasePath("/api/");
$router->map(
    "GET",
    "stores/",
    function () use ($storeController) {
        $storeController->listStores();
    }
);

$router->map(
    "GET",
    "stores/[i:id]",
    function ($id) use ($storeController) {
        $storeController->listStore($id);
    }
);

$router->map(
    "POST",
    "stores/",
    function () use ($storeController) {
        $requestBody = file_get_contents('php://input', 'r');
        $json = json_decode($requestBody);
        $store = null;

        if (isset($json->store)) {
            $store = ["name"=> $json->store->name, "phone"=> $json->store->phone, "city"=> $json->store->city, "zip"=> $json->store->zip];
            $storeController->AddStore($store);
        }
    }
);

$router->map(
    "PUT",
    "stores/[i:id]",
    function ($id) use ($storeController) {
        $requestBody = file_get_contents('php://input', 'r');
        $json = json_decode($requestBody);
        $store = null;
        if (isset($json->store)) {
            $store = ["id"=> $json->store->id ,"name"=> $json->store->name, "phone"=> $json->store->phone, "city"=> $json->store->city, "zip"=> $json->store->zip];
            $storeController->UpdateStore($id,$store);
        }
    }
);

$match = $router->match();
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    header($_SERVER["SERVER_PROTOCOL"] . " 404 not found");
}

