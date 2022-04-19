<?php

namespace App\Cms\Model\Section;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Cms\Model\Singleton\DarkMode;

/**
 * @ApiResource()
 */
class SectionHeading extends DarkMode
{
    private int $id;
    protected string $title;
    protected string $subtitle;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getSubtitle(): string
    {
        return $this->subtitle;
    }

    /**
     * @param string $subtitle
     */
    public function setSubtitle(string $subtitle): void
    {
        $this->subtitle = $subtitle;
    }
}
