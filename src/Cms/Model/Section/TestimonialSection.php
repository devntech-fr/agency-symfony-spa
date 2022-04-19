<?php

namespace App\Cms\Model\Section;

use App\Cms\Model\Component\Carousel;

class TestimonialSection extends SectionHeading
{
    protected ?Carousel $carousel;
    protected array $testimonialCardCollection;
}
