<?php

namespace App\Cms\Model\Section;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Cms\Contract\ButtonInterface;
use App\Cms\Contract\ImageInterface;

/**
 * @ApiResource()
 */
class HeroBanner extends Section
{
    private int $id;
    protected string $title;
    protected string $description;
    protected ButtonInterface $button;
    protected ImageInterface $image;

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getButton(): ButtonInterface
    {
        return $this->button;
    }

    public function getImage(): ImageInterface
    {
        return $this->image;
    }
}
