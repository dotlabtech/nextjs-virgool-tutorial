---
title: صفحات در Next.js
date: 2021/3/18
description: Learn more about Next.js pages.
author: مهدی نیسی
author_image: https://files.virgool.io/upload/users/128552/avatar/We1kug.jpeg?x-img=v1/resize,h_120,w_120/optimize,q_100
cover: https://files.virgool.io/upload/users/128552/posts/kwqdlm7r2ip6/q97sfijptbxq.png
---

توی این پست با هم یاد میگیریم که چطور باید صفحات رو توی next.js تعریف کنیم و دو نوع از پیش رندرها که SSG و SSR هستند رو یاد بگیریم.

توی next.js هر صفحه یک کامپوننت ری اکت هستش که باید توی فولدری به نام pages قرار بگیره. اسم فایلهایی که تعیین میکنید خیلی مهمه چون قراره برای route استفاده بشه.

مثلا اگر توی فولدر pages یک فایل درست کردید به اسم about.js، خروجی این فایل رو میتونید توی مسیر about/ 
ببینید.
همونطور که متوجه شدید دیگه نیازی به پکیج هایی مثل react-router نداریم و کل سیستم مسیریابی رو next.js برای ما مدیریت میکنه که این فوق العادس.

```
function About() {
  return <div>About</div>
}

export default About
```

## چطور مسیرهای داینامیک درست کنیم؟
خوبیه next.js اینه که از مسیرهای داینامیک هم پشتیبانی میکنه. برای مثال اگه یک فایلی بسازید توی pages/posts/[id].js و بعد توی مرورگر میتونید به این شکل posts/1 یا posts/2 بهش دسترسی داشته باشید.


## قبل از رندرشدن یا Pre-rendering
به صورت پیش فرض، next.js تمام صفحات رو pre-render میکنه. یعنی بجای اینکه همه کارها رو جاوااسکریپت سمت کاربر انجام بده، next.js از قبل برای هر صفحه یک کد html درست میکنه که این هم برای پرفورمنس برنامه خیلی خوبه و هم از نظر سئو یک نکته مثبت حساب میشه.

هر کد html ساخته شده نیاز به حداقل کد جاوااسکریپت داره. وقتی که یک صفحه توسط مرورگر لود میشه، کدهای جاوااسکریپت اجرا میشن و اون صفحه به صورت کاملا interactive تبدیل میشه.

به این فرایند اصطلاحا hydration گفته میشه.


## دو شکل Pre-rendering
توی next.js به دو شکل میتونیم صفحات رو pre-render کنیم: یکی به صورت Static Generation و یکی دیگه به صورت Server-side Rendering. فرق این دو تا توی ساخت کد html هستش.

Static Generation: کد html در زمان build-time ساخته میشه.
Server-side Rendering: کد html توی هر ریکوئست ساخته میشه.
نکته مهم اینه که next.js این امکان رو میده از هر کدوم توی هر صفحه استفاده کنیم. شاید برای بعضی از صفحات نیاز باشه از SSG استفاده کرد و برای بعضی صفحات دیگه از SSR.


## نسل استاتیک یا Static Generation
اگر برای یک صفحه‌ای از static generation استفاده میکنید، کد html زمان build ساخته میشه. یعنی توی حالت production، زمانی که دستور next build رو میزنید کد html ساخته میشه و بعد توی هر درخواست از این کد استفاده میشه.


## صفحات بدون دیتا
توی این نوع pre-render، هم میتونیم صفحاتی استاتیک با دیتا یا بدون دیتا داشته باشیم. بیاید یک مثال با هم ببینیم.

```
function About() {
  return <div>About</div>
}

export default About
```
همونطور که می‌بینید این کد نیازی به دیتاهای خارجی نداره و زمان build یک کد ساده html ساخته میشه.


## صفحات با دیتا
توی بعضی از صفحات شاید نیاز باشه که از دیتاهای external استفاده بشه. توی next.js دو تا سناریو داریم که ممکنه یکی یا هر دو استفاده بشه.


* اگر محتوای صفحه شما به دیتای خارجی نیاز داره: از getStaticProps استفاده کنید.
* اگر مسیرهای صفحه شما به دیتای خارجی نیاز دارن: از getStaticPaths استفاده کنید.


## 1. سناریو اول: محتوای صفحه شما به دیتای خارجی نیاز داره
صفحه وبلاگ شما ممکنه نیاز داشته باشه تا لیست پست های وبلاگ رو از CMS بگیره.

```
// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

export default Blog
```

برای fetch کردن این دیتا ها قبل از رندرشدن صفحه، باید یک تابع به نام getStaticProps رو صدا بزنیم. این تابع زمان build اجرا میشه و دیتا از رو به عنوان props به Blog میده.

```
function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } } the Blog component
  // will receive `posts` as a props at build time
  return {
    props: {
      posts
    }
  }
}

export default Blog
```

## 2. سناریو دوم: مسیرهای صفحه شما به دیتای خارجی نیاز دارن
همونطور که گفتم next.js از مسیرهای داینامیک هم پشتیبانی میکنه. برای مثال اگه یک فایلی بسازید توی pages/posts/[id].js و بعد توی مرورگر میتونید به این شکل posts/1 یا posts/2 بهش دسترسی داشته باشید.

با این حال، هر کدوم از این id ها ممکنه به یک سری دیتاهای خارجی نیاز داشته باشه. مثلا میخواید توی مسیر posts/1 دیتاهای پست یک رو نشون بدید.

پس path های صفحات شما، نیاز به دیتاهای خارجی دارن. برای اینکار باید توی next.js یک تابعی به نام getStaticPaths رو به صورت async اکسپورت کنید.

```
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id }
  }))

  return { paths, fallback: false }
}
```

همچنین توی pages/posts/[id].js باید یک تابع دیگه ای رو به نام getStaticProps به صورت async اکسپورت کنید که این تابع بر اساس id، پست مورد نظر رو بر میگردونه.

```
function Post({ post }) {
  // Render post
}

export async function getStaticPaths() {
  // ...
}

export async function getStaticProps({ params }) {
  // params contains the post `id`
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post
```

اگر که این بخش رو کامل متوجه نشدید نگران نباشید، چون توی پست آینده میخوام در مورد data fetching صحبت کنم که اونجا کامل مباحث رو درک میکنید.



## چه زمانی از Static Generation استفاده کنیم؟
پیشنهاد خود تیم next.js استفاده از static generation هستش، چرا چون صفحه شما یک بار ساخته میشه و توسط CDN کش میشه، که اون رو بسیار بالا میبره.

شما میتونید از static generation برای انواع صفحات استفاده کنید. از جمله:

* صفحات بازاریابی
* پست های وبلاگ
* لیست محصولات فروشگاه
* ساخت مستندات

اگر میخواید صفحه شما مرتبا بروز بشه و توی هر درخواست دیتاهای جدیدی بیان، استفاده از static generation ایده خوبی نیستش.


## رندر سمت سرور یا Server-side Rendering
همچنین بهش SSR یا Dynamic Rendering هم میگن.
اگر صفحه‌ای از SSR استفاده میکنه، کد html توی هر درخواست ساخته میشه.

برای استفاده از Server-side Rendering توی صفحه، باید یک تابعی به نام getServerSideProps رو به صورت async اکسپورت کنیم. این تابع توسط سرور توی هر درخواست اجرا میشه.

به عنوان مثال، فرض کنید که صفحه شما نیاز داره که دیتای اون مرتبا از api گرفته بشه و به نمایش دربیاد. میتونید getServerSideProps رو بنویسید که دیتا به عنوان props به Page بده.

```
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://.../data')
  const data = await res.json()

  // Pass data to have page via props
  return { props: { data } }
}

export default Page
```

همونطور که میبیند، getServerSideProps خیلی شبیه به getStaticProps هستش، با این تفاوت که getServerSideProps توی هر درخواست اجرا میشه ولی getStaticProps فقط توی زمان build اجرا میشه.


## خلاصه
توی این پست در مورد دو نوع pre-rendering صحبت کردیم:
<ol>
   <li>Static Generation: کد html زمان build ساخته میشه و توی هر درخواست استفاده میشه. صفحاتی که از Static Generation استفاده میکنن، میتونن با استفاده از getStaticProps و getStaticPaths دیتای خارجی رو دریافت کنن.
   </li>
   <li>Server-side Rendering: کد html توی هر درخواست ساخته میشه. برای ساخت صفحاتی SSR باید از تابع getServerSideProps استفاده کنید. از اونجایی که SSR پرفورمنس کمتری نسبت به SSG داره، در صورت لزوم از اون استفاده بکنید.
   </li>
</ol>

> منبع: https://vrgl.ir/QDYLG