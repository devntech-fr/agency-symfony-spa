<?php

namespace App\Tests\ControllerTest;

use App\Controller\Api\ProductController;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\HttpFoundation\Request;

class ProductControllerTest extends KernelTestCase
{
    public function testCreate()
    {
        $product_controller = new ProductController();
        $request = new Request();
        $request->request->set('name', "Casque bluetooth");
        $request->request->set('category', "audio");
        $request->request->set('tags', ['casque','bluetooth','hi-fi']);
        $request->request->set('amount', 150.5);
        $request->request->set('vat', 20);
        $request->request->set('currency', '$');
        $request->request->set('stock', 500);
        $response = $product_controller->create($request);
        $this->assertEquals(201, $response->getStatusCode(), "Mauvaise réponse.");
        $this->assertNotEmpty($response->getContent(), "Le contenu de la réponse est vide.");
    }
}
