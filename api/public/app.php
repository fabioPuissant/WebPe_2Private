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


$pdo = new PDOStoreModel();

$storeController = new StoreController($pdo);

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
    "POST",
    "stores/",
    function () use ($storeController) {
        $requestBody = file_get_contents('php://input', 'r');
        $json = json_decode($requestBody);
        $store=null;
        if(isset($json->store)) {
            $store =$json->store;
            $storeController->AddStore($store);
        }
    }
);

$router->map(
    "PUT",
    "stores/[i:id]",
    function () use ($storeController) {
        $requestBody = file_get_contents('php://input', 'r');
        $json = json_decode($requestBody);
        $store=null;
        if(isset($json->store)) {
            $store =$json->store;
        }
        $storeController->AddStore($store);
    }
);

$match = $router->match();
if($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 not found");
}

