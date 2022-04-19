<?php

namespace App\Cms\Model\Section;

use App\Cms\Model\Collection\KeyFeature;
use App\Cms\Model\Collection\Page;
use Doctrine\Common\Collections\ArrayCollection;

class KeyFeatureSection extends Section
{
    private int $id;
    protected string $identifier;
    protected string $variant;
    /** @var KeyFeature[] */
    protected iterable $keyFeatures;

    public function __construct(Page $page)
    {
        parent::__construct($page);
        $this->keyFeatures = new ArrayCollection();
    }

    public function getFeatures()
    {
        return $this->keyFeatures;
    }

    public function getVariant()
    {
        return $this->variant;
    }
}
