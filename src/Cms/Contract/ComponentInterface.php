<?php

namespace App\Cms\Contract;

interface ComponentInterface
{
    public function getType(): string;
    public function getVariant(): string;
}
