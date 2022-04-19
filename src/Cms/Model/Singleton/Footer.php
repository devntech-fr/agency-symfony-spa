<?php

namespace App\Cms\Model\Singleton;

use App\Cms\Contract\ImageInterface;
use App\Cms\Contract\NavigationInterface;
use Doctrine\Common\Collections\ArrayCollection;

class Footer {
    protected iterable $widgets;
    protected ImageInterface $logo;
    protected NavigationInterface $navigation;
    protected string $copyright;

    public function __construct()
    {
        $this->widgets = new ArrayCollection();
    }

    public function getWidgets(): iterable
    {
        return $this->widgets;
    }

    public function getLogo(): ImageInterface
    {
        return $this->logo;
    }

    public function getNavigation(): NavigationInterface
    {
        return $this->navigation;
    }

    public function getCopyright(): string
    {
        return $this->copyright;
    }
}
