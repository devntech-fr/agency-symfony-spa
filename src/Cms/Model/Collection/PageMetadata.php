<?php

namespace App\Cms\Model\Collection;

use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource()
 */
class PageMetadata
{
    private int $id;
    protected string $meta;
    protected string $data;
    protected Page $page;
}
