<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class PlayTailwindController extends AbstractController
{
    public function home()
    {
        return $this->render(
            'play/pages/index.html.twig'
        );
    }

    public function notFound()
    {
        return $this->render(
            'play/pages/404.html.twig'
        );
    }

    public function about()
    {
        return $this->render(
            'pages/about.html.twig'
        );
    }

    public function pricing()
    {
        return $this->render(
            'play/pages/pricing.html.twig'
        );
    }

    public function blog()
    {
        return $this->render(
            'play/pages/blog-grids.html.twig'
        );
    }

    public function single()
    {
        return $this->render(
            'play/pages/blog-details.html.twig'
        );
    }

    public function contact()
    {
        return $this->render(
            'play/pages/contact.html.twig'
        );
    }
}
