<?php

namespace App\WordPress;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class WPClient
{
    protected string $base_url = 'http://devntech.local:8002/wp-json/wp/v2';
    private HttpClientInterface $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function get(string $url, array $parameters)
    {
        return $this->client->request('GET', $this->base_url.$url, $parameters);
    }

    public function post(string $url, array $parameters)
    {
        return $this->client->request('POST', $this->base_url.$url, $parameters);
    }

    public function getBaseUrl(): string
    {
        return $this->base_url;
    }

    public function getClient(): HttpClientInterface
    {
        return $this->client;
    }
}
