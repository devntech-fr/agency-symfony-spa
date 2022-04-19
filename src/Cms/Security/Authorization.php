<?php

namespace App\Cms\Security;

use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource()
 */
class Authorization
{
    private int $id;
    protected array $groups;
}
