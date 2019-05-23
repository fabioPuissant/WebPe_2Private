<?php
/**
 * Created by PhpStorm.
 * User: 11701379
 * Date: 22/05/2019
 * Time: 22:16
 */

namespace View;


class SingleStore
{
    public function show(array $data)
    {
        header("Content-Type: application/json");
        http_response_code($data["statuscode"]);
        $store = $data["store"];
        print(json_encode($store));
    }
}