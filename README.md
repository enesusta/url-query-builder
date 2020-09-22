<br/>

<div align="center">

`url-query-builder` builds a URL query with objects instead of the key-value model.

[![Build Status](https://img.shields.io/travis/73VW/TechnicalReport.svg?style=for-the-badge&label=build)](https://travis-ci.com/enesusta/url-query-builder)
![Coveralls github](https://img.shields.io/coveralls/github/enesusta/url-query-builder?style=for-the-badge)
![npm](https://img.shields.io/npm/v/@enesusta/url-query-builder?color=red&style=for-the-badge)
[![CodeFactor](https://www.codefactor.io/repository/github/enesusta/url-query-builder/badge/master?style=for-the-badge)](https://www.codefactor.io/repository/github/enesusta/url-query-builder/overview/master)
![npm bundle size](https://img.shields.io/bundlephobia/min/@enesusta/url-query-builder?color=orange&style=for-the-badge)
![npm](https://img.shields.io/npm/dm/@enesusta/url-query-builder?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@enesusta/url-query-builder?color=blue&style=for-the-badge)
</div>

## ☕️ Features

- Small and lightweight ( Only 313 Byte )
- %100 Code Coverage

## 🕺 Install

by using `npm`:
```bash
$ npm i @enesusta/url-query-builder
```

by using `yarn`:

```bash
$ yarn add @enesusta/url-query-builder
```

url-query-builder supports either CommonJS modules and ECMAScript modules. It means that you can use it either in browser or Node.js.

### Examples

### Node.js 

```js
const UrlQueryBuilder = require('@enesusta/url-query-builder');

const host = "https://superiorapi.com/human";
const entry = {
    name: "Enes",
    age: 22
};

const builder = new UrlQueryBuilder(entry);
const query = host + builder.build();

console.log(query); // https://superiorapi.com/human?name=Enes&age=22
```

### React

You can use it with ECMAScript modules as well.

Let's look at the example listed below that demonstrates how behaves url-query-builder as a state object.

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/url-query-builder/url-query-builder-1.gif)

```jsx
import React, {useState} from 'react'
import UrlQueryBuilder from '@enesusta/url-query-builder';

export const Example = () => {
    const [query, setQuery] = useState({name: "enes", age: 22});
    const q = new UrlQueryBuilder(query);
    const host = "https://mysuperiorapi.com/human";

    const nameHandler = e => {
        setQuery({...query, name: e.target.value});
    }

    const ageHandler = e => {
        setQuery({...query, age: e.target.value});
    }

    return (
        <div>
            <input type="text" onChange={nameHandler}/>
            <input type="text" onChange={ageHandler}/> <br/> <br />
            Object is {JSON.stringify(query)}; <br /> <br />              
            Query is {host + q.build()}
        </div>
    );
};
```

## Made with

- [Rollup](https://rollupjs.org/guide/en/)

## License

MIT © [enesusta](https://github.com/enesusta)

