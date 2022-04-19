<?php

namespace App\Cms\Model\Collection;

use App\Cms\Contract\ImageInterface;

class Article
{
    private int $id;
    protected ImageInterface $image;
    protected string $title;
    protected Author $author;
    protected \DateTime $published_at;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return \App\Cms\Contract\ImageInterface
     */
    public function getImage(): ImageInterface
    {
        return $this->image;
    }

    /**
     * @param ImageInterface $image
     */
    public function setImage(ImageInterface $image): void
    {
        $this->image = $image;
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
     * @return \App\Cms\Model\Collection\Author
     */
    public function getAuthor(): \App\Cms\Model\Collection\Author
    {
        return $this->author;
    }

    /**
     * @param \App\Cms\Model\Collection\Author $author
     */
    public function setAuthor(\App\Cms\Model\Collection\Author $author): void
    {
        $this->author = $author;
    }

    /**
     * @return \DateTime
     */
    public function getPublishedAt(): \DateTime
    {
        return $this->published_at;
    }

    /**
     * @param \DateTime $published_at
     */
    public function setPublishedAt(\DateTime $published_at): void
    {
        $this->published_at = $published_at;
    }
}
