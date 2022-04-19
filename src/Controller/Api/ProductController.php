<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function dd;

class ProductController extends AbstractController
{
    public function create(Request $request)
    {
        // create product from request
//        dd($request);
        // save product to database
        // serialize new product
        // return 201
        return new Response('No content.', Response::HTTP_CREATED, []);
    }

    public function products(Request $request)
    {
        // create product from request
//        dd($request);
        // save product to database
        // serialize new product
        // return 201
        return new Response([], Response::HTTP_OK, []);
    }
}
