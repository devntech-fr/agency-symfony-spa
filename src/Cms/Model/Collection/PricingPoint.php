<?php

namespace App\Cms\Model\Collection;

class PricingPoint
{
    protected int $id;
    protected string $icon;
    protected string $description;
    protected bool $is_available;

    public function getIcon()
    {
        return $this->icon;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function isAvailable()
    {
        return $this->is_available;
    }
}
