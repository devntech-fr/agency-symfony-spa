<?php

namespace App\Cms\Model\Collection;

use App\Cms\Contract\ImageInterface;

class KeyFeature
{
    private int $key;
    protected ImageInterface $image;
    protected string $title;
    protected string $description;
}
