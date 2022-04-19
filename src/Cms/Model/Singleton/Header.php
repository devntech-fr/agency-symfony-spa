<?php

namespace App\Cms\Model\Singleton;

use App\Cms\Contract\ButtonInterface;
use App\Cms\Contract\ImageInterface;
use App\Cms\Contract\NavigationInterface;

class Header
{
    private int $id;
    protected string $variant;
    protected ImageInterface $logo;
    protected NavigationInterface $navigation;
    protected ButtonInterface $button;

    /**
     * @return string
     */
    public function getVariant(): string
    {
        return $this->variant;
    }

    /**
     * @param string $variant
     */
    public function setVariant(string $variant): void
    {
        $this->variant = $variant;
    }

    /**
     * @return \App\Cms\Contract\ImageInterface
     */
    public function getLogo(): ImageInterface
    {
        return $this->logo;
    }

    /**
     * @param \App\Cms\Contract\ImageInterface $logo
     */
    public function setLogo(ImageInterface $logo): void
    {
        $this->logo = $logo;
    }

    /**
     * @return NavigationInterface
     */
    public function getNavigation(): NavigationInterface
    {
        return $this->navigation;
    }

    /**
     * @param \App\Cms\Contract\NavigationInterface $navigation
     */
    public function setNavigation(NavigationInterface $navigation): void
    {
        $this->navigation = $navigation;
    }

    /**
     * @return ButtonInterface
     */
    public function getButton(): ButtonInterface
    {
        return $this->button;
    }

    /**
     * @param \App\Cms\Contract\ButtonInterface $button
     */
    public function setButton(ButtonInterface $button): void
    {
        $this->button = $button;
    }
}
