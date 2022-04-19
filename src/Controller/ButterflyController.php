<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ButterflyController extends AbstractController
{
    public function home()
    {
        return $this->render(
            'butterfly/pages/index.html.twig'
        );
    }

    public function inner()
    {
        return $this->render(
            'butterfly/pages/inner-page.html.twig'
        );
    }

    public function portfolioDetails()
    {
        return $this->render(
            'butterfly/pages/portfolio-details.html.twig'
        );
    }
}
