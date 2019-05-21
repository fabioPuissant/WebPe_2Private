<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/18
 * Time: 20:57
 */

namespace controller;

use PHPUnit\Framework\TestCase;
use Controller\StoreController;

class StoreControllerTest extends TestCase
{
    public function setUp() {
        $this->storeModel = $this->getMockBuilder('\model\StoreModel')
            ->disableOriginalConstructor()
            ->getMock();
        $this->jsonStoresView = $this->getMockBuilder('\view\JsonStoresView')
            ->disableOriginalConstructor()
            ->getMock();
    }

    public function providerStores()
    {
        return [['id'=>'1','name'=>'zeeman','phone'=>'011889900','email'=>'zeeman@email.com','street'=>'terra','city'=>'incognita','zip'=>'3500'],
            ['id'=>'1','name'=>'et merkske','phone'=>'098899871','email'=>'merkske@email.com','street'=>'test','city'=>'test2','zip'=>'2020']];
    }

    /**
     * @DataProvider providerStores
     */
    public function AddStores_StoreController_Status200Store() {
    }

    public function should_return_stores_object_with_id_1(){

    }
}