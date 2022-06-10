<div align="center">
  <img alt="Logo" src="https://github.com/wwwhickup/portfolio-v3/blob/master/src/images/logo.png" width="100" />
  <h1 align="center">
    Portfolio v3
  </h1>
</div>

## 🚨 Forking this repo (please read!)
Many people have contacted me asking me if they can use this code for their own portfolio, and the answer to that question is usually **yes, with attribution**.

I value keeping this repo as open source, but as you all know, _**plagiarism is bad**_. It's always disheartening whenever I find that someone has copied my site without giving me credit. I spent a non-trivial amount of effort building and designing this iteration of my website, and I am proud of it! All I ask of you all is to not claim this effort as your own.

Please also note that I did not build this site with the intention of it being a starter theme, so if you have questions about implementation, please refer to the [Gatsby docs](https://www.gatsbyjs.org/docs/).

As a [backend](https://hickup-portfolio-strapi.herokuapp.com/), I used [Strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html) Headless CMS. By adding strapi record, you can generate your portfolio website.  If you want to build your portfolio easily or have any other questions then create the issue

Also you can use hardcorded static seed either😉

## 🛠 Installation & Set Up
1. Prepare ENV

   ```sh
    DISCRIPTION=Lorem .....
    GATSBY_STRAPI_URL=https://hickup-portfolio-strapi.herokuapp.com
    NAME=FirstName LastName
    SHORT_NAME=FL
    SITEURL=https://example.com
    TELEGRAM_USERNAME=<telegram username or link>
    TITLE=<project title will show as a page header>
    GATSBY_STRAPI_PORTFOLIO_ID=<Your profile strapi portfolio collection id>
   ```

2. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

3. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

4. Install dependencies

   ```sh
   yarn
   ```

5. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#172a45](https://via.placeholder.com/10/0a192f?text=+) `#172a45` |
| Lightest Navy  | ![#303C55](https://via.placeholder.com/10/303C55?text=+) `#303C55` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |
