<?php

namespace App\Cms\Contract;

interface ImageInterface
{
    public function getSource(): string;
    public function getAlt(): string;
    public function getTitle(): string;
}
