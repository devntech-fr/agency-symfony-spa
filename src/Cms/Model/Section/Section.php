<?php

namespace App\Cms\Model\Section;

use App\Cms\Contract\ComponentInterface;
use App\Cms\Contract\SectionInterface;
use App\Cms\Model\Collection\Page;
use Doctrine\Common\Collections\ArrayCollection;

class Section implements SectionInterface
{
    private int $id;
    protected string $name;
    protected string $slug = 'section-slug';
    protected string $uid;
    protected string $screenshot = '';
    protected array $meta = [];
    protected ?SectionHeading $heading = null;
    /** @var ComponentInterface[] */
    protected iterable $components;
    protected bool $isWhite = true;
    protected Page $page;

    public function __construct(Page $page)
    {
        $this->page = $page;
        $this->components = new ArrayCollection();
    }

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
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getSlug(): string
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     */
    public function setSlug(string $slug): void
    {
        $this->slug = $slug;
    }

    /**
     * @return string
     */
    public function getUid(): string
    {
        return $this->uid;
    }

    /**
     * @param string $uid
     */
    public function setUid(string $uid): void
    {
        $this->uid = $uid;
    }

    /**
     * @return string
     */
    public function getScreenshot(): string
    {
        return $this->screenshot;
    }

    /**
     * @param string $screenshot
     */
    public function setScreenshot(string $screenshot): void
    {
        $this->screenshot = $screenshot;
    }

    /**
     * @return array
     */
    public function getMeta(): array
    {
        return $this->meta;
    }

    /**
     * @param array $meta
     */
    public function setMeta(array $meta): void
    {
        $this->meta = $meta;
    }

    public function unsetMeta(int $key): bool
    {
        if (!array_key_exists($key, $this->meta)) {
            return false;
        }
        unset($this->meta[$key]);
        return true;
    }

    /**
     * @return SectionHeading|null
     */
    public function getHeading(): ?SectionHeading
    {
        return $this->heading;
    }

    /**
     * @param SectionHeading|null $heading
     */
    public function setHeading(?SectionHeading $heading): void
    {
        $this->heading = $heading;
    }

    /**
     * @return bool
     */
    public function isWhite(): bool
    {
        return $this->isWhite;
    }

    /**
     * @return \App\Cms\Model\Collection\Page
     */
    public function getPage(): Page
    {
        return $this->page;
    }

    /**
     * @param Page $page
     */
    public function setPage(Page $page): void
    {
        $this->page = $page;
    }

    /**
     * @return ComponentInterface[]
     */
    public function getComponents()
    {
        return $this->components;
    }

    /**
     * @param ComponentInterface $component
     */
    public function addComponent(ComponentInterface $component): void
    {
        if (!$this->components->contains($component)) {
            $this->components->add($component);
        }
    }

    /**
     * @param ComponentInterface $component
     */
    public function removeComponent(ComponentInterface $component): void
    {
        if ($this->components->contains($component)) {
            $this->components->removeElement($component);
        }
    }
}
