<?php

namespace App\Slugger;

use Symfony\Component\String\Slugger\SluggerInterface;

class Slugger
{
    protected SluggerInterface $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    public function generate(string $sluggable)
    {
        return $this->slugger->slug($sluggable);
    }
}
