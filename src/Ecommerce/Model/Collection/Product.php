<?php

namespace App\Ecommerce\Model\Collection;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Cms\Contract\ImageInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Uid\UuidV4;

/**
 * @ApiResource()
 */
class Product
{
    private int $id;
    protected string $title;
    protected string $uid;
    protected string $slug;
    protected string $category;
    protected float $price;
    protected string $currency;
    protected float $vat;
    protected string $description;
    /** @var \App\Cms\Contract\ImageInterface[] */
    protected iterable $images;
    protected int $stock;
    /** @var string[] */
    protected array $related_products;

    public function __construct(string $title, ProductCategory $category, ?string $description)
    {
        $this->title = $title;
        $this->category = $category->getUid();
        $this->description = $description;
        $this->uid = Uuid::v4();
        $this->images = new ArrayCollection();
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
     * @return string|UuidV4
     */
    public function getUid()
    {
        return $this->uid;
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
    public function getCategory(): string
    {
        return $this->category;
    }

    /**
     * @param string $category
     */
    public function setCategory(string $category): void
    {
        $this->category = $category;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price): void
    {
        $this->price = $price;
    }

    /**
     * @return string
     */
    public function getCurrency(): string
    {
        return $this->currency;
    }

    /**
     * @param string $currency
     */
    public function setCurrency(string $currency): void
    {
        $this->currency = $currency;
    }

    /**
     * @return float
     */
    public function getVat(): float
    {
        return $this->vat;
    }

    /**
     * @param float $vat
     */
    public function setVat(float $vat): void
    {
        $this->vat = $vat;
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
     * @return \App\Cms\Contract\ImageInterface[]
     */
    public function getImages()
    {
        return $this->images;
    }

    public function addImage(ImageInterface $image): void
    {
        $this->images->add($image);
    }

    public function removeImage(ImageInterface $image): void
    {
        $this->images->removeElement($image);
    }

    /**
     * @return int
     */
    public function getStock(): int
    {
        return $this->stock;
    }

    /**
     * @param int $stock
     */
    public function setStock(int $stock): void
    {
        $this->stock = $stock;
    }

    public function getRelatedProducts(): iterable
    {
        return $this->related_products;
    }

    public function addRelatedProducts(array $product_ids): void
    {
        $count = count($product_ids);
        for ($i = 0; $i <= $count; $i++) {
            if (!in_array($product_ids, $this->related_products, true)) {
                $this->related_products[] = $product_ids[$i];
            }
        }
    }

    public function removeRelatedProducts(array $product_ids): void
    {
//        $count = count($product_ids);
//        $values = array_values($this->related_products);
//        for ($i = 0; $i <= $count; $i++) {
//            if (in_array($product_ids[$i], $this->related_products, true)) {
//                if (strpos($this->related_products[], $product_ids))
//                array_filter($this->related_products, function (string $related_product_id) use ($product_ids, $i) {
//                    if ($related_product_id === $product_ids[$i]) {
//                        // todo
//                    }
//                });
//                $this->related_products[] = $product_ids[$i];
//            }
//        }
    }
}
