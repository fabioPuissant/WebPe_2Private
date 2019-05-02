<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/18
 * Time: 20:57
 */

namespace controller;

use PHPUnit\Framework\TestCase;
use \controller\StoreController;

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
        return [""];
    }
}