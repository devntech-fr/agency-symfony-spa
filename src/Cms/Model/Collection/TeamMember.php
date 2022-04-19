<?php

namespace App\Cms\Model\Collection;

use App\Cms\Contract\ImageInterface;

class TeamMember
{
    protected string $key;
    protected ImageInterface $avatar;
    protected string $name;
    protected string $job;
    protected array $social_networks;

    public function getAvatar(): ImageInterface
    {
        return $this->avatar;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getJob(): string
    {
        return $this->job;
    }

    public function getNetworks(): iterable
    {
        return $this->social_networks;
    }
}
