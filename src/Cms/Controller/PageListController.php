<?php

namespace App\Cms\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class PageListController extends AbstractController
{
    public function __invoke()
    {
        return new JsonResponse([], Response::HTTP_OK, [], true);
    }
}
