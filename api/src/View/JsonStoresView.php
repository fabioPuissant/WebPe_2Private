<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 21:54
 */

class JsonStoresView implements view
{

    public function show(array $data)
    {
        header("Content-Type: application/json");
        http_response_code($data["statuscode"]);
        $stores = $data["stores"];
        print(json_encode($stores));
    }
}