<?php

namespace App\Controller;

use App\WordPress\WPClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DashboardController extends AbstractController
{
    public function dashboard(WPClient $client): Response
    {
//        $response = $client->get('/pages', []);
//        var_dump($response->getContent());
//        var_dump($response->toArray());
//        die('pages');
        return $this->render('dashboard/dashboard.html.twig', []);
    }
}
