<?php

namespace App\Cms\Contract;

use App\Cms\Model\Collection\Page;
use App\Cms\Model\Section\SectionHeading;

interface SectionInterface
{
    public function getPage(): Page;
    public function setPage(Page $page): void;
    public function getHeading(): ?SectionHeading;
}
