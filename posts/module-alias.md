---
title: قابلیت Module Alias در جاوااسکریپت
date: 2022/5/12
description: how to create shorter imports
author: ابراهیم
author_image: https://files.virgool.io/upload/users/543792/avatar/eeM4Nw.jpeg?x-img=v1/resize,h_120,w_120/optimize,q_100
cover: https://iili.io/LSV4HP.jpg
---

اگر با فریم ورک هایی مثل react کار کرده باشید، با این نمونه کد خیلی خوب آشنا هستین:

```
import { Layout } from '../../../components/Header'
```

مشکل اینجور آدرس دهی ها اینه که بیش از حد طولانی هستن.
در جاوااسکریپت قابلیتی به نام module alias (تو خونه path alias صداش می کنن) وجود داره که باعث میشه این آدرس دهی ها تا حدودی خلاصه تر بشه تا کدهای تر و تمیز تری داشته باشیم

## نحوه استفاده در react
برای استفاده از این قابلیت باید فایلی به نام jsconfig.json را درون مسیر اصلی پروژه ایجاد کنیم.
درون این فایل یک شی به نام compilerOptions با محتویات زیر باید بسازیم 

```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

```
## توضیحات مقادیری که دریافت کرده:
* **baseUrl:** مسیر اصلی (root) ماژول هایی که فراخوانی می کنیم رو مشخص میکنیم
* **include:** قسمت مشترک بین آدرس دهی ها (معمولا بدون نوشتن این قسمت کار می کنه)

بعد از ایجاد jsconfig.json نیازه که پروژه (سرور) دوباره راه اندازی بشه.

حالا کد بالا رو می تونیم به این صورت خلاصه کنیم:

```
import { Layout } from 'components/Header'

```


## در آخر چند نکته رو باید بگم:

> اگر مسیر دهی پروژه هاتون خیلی طولانی نیستن، بهتره ازش استفاده نکنید؛ چون فقط باعث شلوغی بیشتر در کار میشه

> این قابلیت در typescript هم وجود داره

امیدوارم به برای کسی مفید بوده باشه

> منابع: [Using Import aliases in JavaScript](https://medium.com/dailyjs/using-import-aliases-in-javascript-a0b46237601c)
>[Absolute imports with Create React App](https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d)