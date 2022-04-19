<?php

namespace App\Cms\Model\Component;

use App\Cms\Contract\ImageInterface;

class Image implements ImageInterface
{
    private int $id;
    protected string $source;
    protected string $alt;
    protected string $title;
    protected ?float $width;
    protected ?float $height;

    public function getId()
    {
        return $this->id;
    }

    public function getSource(): string
    {
        return $this->source;
    }

    public function getAlt(): string
    {
        return $this->alt;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
}
