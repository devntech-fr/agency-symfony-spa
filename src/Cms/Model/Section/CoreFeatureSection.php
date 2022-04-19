<?php

namespace App\Cms\Model\Section;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Cms\Contract\ButtonInterface;
use App\Cms\Contract\ImageInterface;
use App\Cms\Model\Collection\Page;

/**
 * @ApiResource()
 */
class CoreFeatureSection extends Section
{
    protected string $description;
    protected ButtonInterface $button;
    protected ImageInterface $image;
    protected bool $hasShape;
    protected ImageInterface $shape;

    public function __construct(Page $page)
    {
        parent::__construct($page);
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
