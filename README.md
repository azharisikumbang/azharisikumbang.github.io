# azharisaputra.web.id

Just a personal blog, a place to write. It build on top of eleventy with theme based on [no-style-please](https://github.com/riggraz/no-style-please) theme, which is an amazing theme.

---

![Site Screenshot](/site-screenshot.png)
## [Check out the page](https://azharisikumbang.github.io/)

# Features
- Simple design
- Fast, minimal amount of CSS to download
- Pre-configured CMS
- Easy to use and deploy
- Fully responsive (I hope)
- Blog pages
- Project pages
- Medium Pages (nah, just a bunch of links in json)

# Usage

Test locally,
### 1. Clone the repository ( or use it as a template then clone )

`git clone https://github.com/azharisikumbang/azharisikumbang.github.io.git`

### 2. Install the required packages

`npm i`

### 3. Serve the site for local development

`npm start`

### 4. Build the site

`npm run build`

### 5. Deploy the site

Setup github actions to build it (please check the workflows, I don't maintain it frequently), or manually copy the site files from `_site` to them.

# Configuration
All configuration can be easily changed from within the Netlify CMS at `SITE_URL/admin`.
If you prefer to do so, you can also manually edit the configuration files with a text editor.

All configuration files are located in the `_data` folder and are in `json` format.
Here I describe what each field means:

### - site.json
```
title: default page title
description: global page description
language: HTML language value
back_home_text: text to show on "back home" button on every post
url: site url, used in Netlify CMS
```

### - homepage.json
```
title: homepage title
subtitle: text to show under homepage title
data: 
  - post_list    : default posts lists
  - project_list : just eleventy collections names (check add elventy config .eleventy.js)
```

### - project.json
```
- title: page title
- items: 
  - title : Your project main title
  - description: displayed on projects page as card description
  - demo_url: your link demo
  - github_url: github url
```

### - medium.json
```
- url: your medium profile url
- items:
  - title: the medium post title that displayed on the page
  - url: where people read your post
  - post_date: date of post (month/day)
  - post_year: year of post (I just used it for grouping)
  - post_fulldate: full date of post
  - summary: displayed on blog card on home page
```

### - the resume /cv link

Upload yours on this path `media/resume.pdf`
