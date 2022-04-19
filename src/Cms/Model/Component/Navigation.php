<?php

namespace App\Cms\Model\Component;

use App\Cms\Contract\NavigationInterface;

class Navigation implements NavigationInterface
{
    protected string $name;
    protected string $layoutPart;
    protected array $navigationLinkCollection;
}
