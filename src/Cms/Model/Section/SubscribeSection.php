<?php

namespace App\Cms\Model\Section;

use App\Cms\Contract\ButtonInterface;

class SubscribeSection extends SectionHeading
{
    protected string $label;
    protected string $submitUrl;
    protected ButtonInterface $button;
}
