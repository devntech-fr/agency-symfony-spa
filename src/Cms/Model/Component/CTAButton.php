<?php

namespace App\Cms\Model\Component;

use App\Cms\Contract\ButtonInterface;

class CTAButton implements ButtonInterface
{
    private int $id;
    protected string $label;
    protected string $target;
    protected string $targetUrl;
    protected string $variant;

    public function getId()
    {
        return $this->id;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getTarget(): string
    {
        return $this->target;
    }

    public function getTargetUrl(): string
    {
        return $this->targetUrl;
    }

    public function getVariant(): string
    {
        return $this->variant;
    }
}
