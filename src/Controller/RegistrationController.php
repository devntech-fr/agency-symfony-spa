<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegistrationController extends AbstractController
{
    public function register(UserPasswordHasherInterface $passwordHasher, Request $request): Response
    {
        return $this->render(
            'play-tailwind/signup.html.twig'
        );
    }
}
