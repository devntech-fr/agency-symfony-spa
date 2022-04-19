<?php

namespace App\Cms\Model\Section;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Cms\Model\Collection\Article;
use App\Cms\Model\Collection\Page;
use App\Cms\Model\Component\Carousel;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ApiResource()
 */
class BlogSection extends Section
{
    protected bool $hasCarousel;
    protected Carousel $carousel;
    /** @var Article[] */
    protected iterable $articleCards;

    public function __construct(Page $page)
    {
        parent::__construct($page);
        $this->articleCards = new ArrayCollection();
    }

    public function hasCarousel(): bool
    {
        return $this->hasCarousel;
    }

    public function getCarousel(): Carousel
    {
        return $this->carousel;
    }

    /**
     * @return Article[]
     */
    public function getArticles()
    {
        return $this->articleCards;
    }
}
