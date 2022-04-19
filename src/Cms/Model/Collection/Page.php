<?php

namespace App\Cms\Model\Collection;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Cms\Contract\SectionInterface;
use App\Cms\Model\Section\Section;
use App\Cms\Model\Singleton\Footer;
use App\Cms\Model\Singleton\Header;
use App\Cms\Security\Authorization;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Uid\UuidV4;

/**
 * @ApiResource()
 */
class Page
{
    private ?int $id = null;
    protected string $title;
    protected ?string $slug;
    protected string $uid;
    protected string $status;

    protected ?Header $header;
    protected ?Footer $footer;
    protected \DateTime $published;
    protected \DateTime $updated;

    /** @var PageMetadata[] */
    protected iterable $meta_datas;
    /** @var \App\Cms\Security\Authorization[] */
    protected iterable $authorizations;
    /** @var Section[] */
    protected iterable $sections;

    public function __construct(string $title)
    {
        $this->meta_datas = new ArrayCollection();
        $this->authorizations = new ArrayCollection();
        $this->sections = new ArrayCollection();
        $this->header = new Header();
        $this->footer = new Footer();
        $this->title = $title;
        $this->uid = Uuid::v4();
        $this->status = 'created';
    }

    public function getId(): ?int
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
     * @return string|null
     */
    public function getSlug(): ?string
    {
        return $this->slug;
    }

    /**
     * @param string|null $slug
     */
    public function setSlug(?string $slug): void
    {
        $this->slug = $slug;
    }

    /**
     * @return string|UuidV4
     */
    public function getUid()
    {
        return $this->uid;
    }

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * @return Header|null
     */
    public function getHeader(): ?Header
    {
        return $this->header;
    }

    /**
     * @return Footer|null
     */
    public function getFooter(): ?Footer
    {
        return $this->footer;
    }

    /**
     * @return \DateTime
     */
    public function getPublished(): \DateTime
    {
        return $this->published;
    }

    /**
     * @return \DateTime
     */
    public function getUpdated(): \DateTime
    {
        return $this->updated;
    }

    /**
     * @return Authorization[]
     */
    public function getAuthorizations(): iterable
    {
        return $this->authorizations;
    }

    /**
     * @return Section[]
     */
    public function getSections()
    {
        return $this->sections;
    }

    public function addSection(SectionInterface $section): void
    {
        $this->sections->add($section);
        $section->setPage($this);
    }

    public function removeSection(SectionInterface $section): void
    {
        $this->sections->removeElement($section);
        $section->setPage(null);
    }

    /**
     * @return PageMetadata[]
     */
    public function getMetaData()
    {
        return $this->meta_datas;
    }
}
