<br/>

<div align="center">

`url-query-builder` builds a URL query with objects instead of the key-value model.

![npm](https://img.shields.io/npm/v/@enesusta/url-query-builder?color=orange&style=for-the-badge)
[![CodeFactor](https://www.codefactor.io/repository/github/enesusta/url-query-builder/badge/master?style=for-the-badge)](https://www.codefactor.io/repository/github/enesusta/url-query-builder/overview/master)
![npm bundle size](https://img.shields.io/bundlephobia/min/@enesusta/url-query-builder?color=orange&style=for-the-badge)
![npm](https://img.shields.io/npm/dm/@enesusta/url-query-builder?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@enesusta/url-query-builder?color=blue&style=for-the-badge)
</div>

## ☕️ Features

- Small and lightweight ( Only 313 Byte )

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


![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/url-query-builder/url-query-builder-1.gif)