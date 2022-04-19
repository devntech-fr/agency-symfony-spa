<?php

namespace App\Cms\Model\Collection;

use App\Cms\Contract\ImageInterface;

class TestimonialCard
{
    private int $id;
    protected string $title;
    protected string $description;
    protected ImageInterface $avatar;
    protected string $name;
    protected string $pseudo;
    protected ?float $review;

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
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return \App\Cms\Contract\ImageInterface
     */
    public function getAvatar(): ImageInterface
    {
        return $this->avatar;
    }

    /**
     * @param ImageInterface $avatar
     */
    public function setAvatar(ImageInterface $avatar): void
    {
        $this->avatar = $avatar;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getPseudo(): string
    {
        return $this->pseudo;
    }

    /**
     * @param string $pseudo
     */
    public function setPseudo(string $pseudo): void
    {
        $this->pseudo = $pseudo;
    }

    /**
     * @return float|null
     */
    public function getReview(): ?float
    {
        return $this->review;
    }

    /**
     * @param float|null $review
     */
    public function setReview(?float $review): void
    {
        $this->review = $review;
    }


}
