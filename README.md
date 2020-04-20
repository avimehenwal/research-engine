# search-engine

Webs search engine

![Demo](demo.png)

## Problem

Multi faceted search, same search multiple context

* [ ] Add/Remove/List sources
* [ ] Tabbed view on sources
* [ ] Enable disable sources

> Some websites use frame Killer code

## Sources

1. https://products.wolframalpha.com/api/
2. Twitter Search
3. Reddit search
4. [Stackoverflow search](https://api.stackexchange.com/docs)
5. Google Images search
6. Google Search
7. [Youtube Search](https://developers.google.com/youtube/v3/docs/search)
8. Craiglist
9. Amazon

### UI

* https://vuejs.org/resources/themes.html


```sh
vue add vuex
yarn build; firebase deploy --only hosting
```

## Issues

Most websites use **framekiller code** HTTP Header `x-frame-options: deny`.
HTTP headers are used to pass additional information with HTTP response or HTTP requests. The X-Frame-Options is used to prevent the site from clickjacking attacks.

Communicating from a parent window to a child iframe is a known problem in JavaScript and has already been solved

iframes are blocked by after certain number of requests

### Metadata

* [Release names, inspired from 1A student names](https://www.cbr.com/my-hero-academia-class-1-a-ranked/)
* [Nuxt Firebase](https://firebase.nuxtjs.org/guide/getting-started/)
