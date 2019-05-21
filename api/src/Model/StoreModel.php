<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 20:56
 */

namespace Model;

interface StoreModel
{
    public function ListStoreById($id);
    public function ListAllStores();
    public function AddStore();
    public function UpdateStore();
    public function DeleteStore();

}
