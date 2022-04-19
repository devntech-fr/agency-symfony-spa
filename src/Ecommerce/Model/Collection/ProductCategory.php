<?php

namespace App\Ecommerce\Model\Collection;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Uid\UuidV4;
use App\Ecommerce\Controller\PostProductCategory;

/**
 * @ApiResource()
 */
class ProductCategory
{
    private int $id;
    protected string $uid;
    protected string $name;
    protected string $slug;
    /** @var Product[] */
    protected iterable $products;

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->uid = Uuid::v4();
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    public function getUid(): UuidV4
    {
        return $this->uid;
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
     * @return Product[]
     */
    public function getProducts()
    {
        return $this->products;
    }
}
