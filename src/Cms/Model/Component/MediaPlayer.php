<?php

namespace App\Cms\Model\Component;

use App\Cms\Contract\ButtonInterface;
use App\Cms\Contract\ImageInterface;

class MediaPlayer
{
    protected ImageInterface $thumbnail;
    protected ButtonInterface $button;
    protected string $media_source;
}
