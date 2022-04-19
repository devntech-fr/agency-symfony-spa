<?php

namespace App\Cms\Model\Section;

use App\Cms\Contract\ImageInterface;
use App\Cms\Model\Collection\BusinessService;
use App\Cms\Model\Collection\Page;
use App\Cms\Model\Component\MediaPlayer;
use Doctrine\Common\Collections\ArrayCollection;

class BusinessServiceSection extends Section
{
    private int $id;
    protected MediaPlayer $mediaPlayer;
    protected bool $hasShape;
    /** @var BusinessService[] */
    protected iterable $business_services;
    protected ImageInterface $shape;

    public function __construct(Page $page)
    {
        parent::__construct($page);
        $this->business_services = new ArrayCollection();
    }

    /**
     * @return BusinessService[]
     */
    public function getServices(): iterable
    {
        return $this->business_services;
    }

    public function hasShape(): bool
    {
        return $this->hasShape;
    }

    public function getShape(): ImageInterface
    {
        return $this->shape;
    }
}
