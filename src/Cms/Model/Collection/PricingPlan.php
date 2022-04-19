<?php

namespace App\Cms\Model\Collection;

use App\Cms\Contract\ButtonInterface;
use App\Cms\Model\Component\PricingOption;

class PricingPlan
{
    protected string $name;
    protected string $billingPeriod;
    protected string $description;
    protected ButtonInterface $button;
    protected PricingOption $option;
    protected float $amount;
    protected string $currency;
    protected array $pointCollection;
}
