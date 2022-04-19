<?php

namespace App\Ecommerce\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class PostProductCategory extends AbstractController
{
    public function __invoke(Request $request)
    {
        $requestBody = $request->getContent();
        dump($requestBody);
    }
}
