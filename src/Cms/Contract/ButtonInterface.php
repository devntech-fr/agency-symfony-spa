<?php

namespace App\Cms\Contract;

interface ButtonInterface
{
    public function getLabel(): string;
    public function getTarget(): string;
    public function getTargetUrl(): string;
    public function getVariant(): string;
}
