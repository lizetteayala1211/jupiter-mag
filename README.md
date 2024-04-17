# Jupiter Magazine Codebase

## Description

This is the repository that holds all the content and basic architectural components that make up the Jupiter magazine. 

## Set up

1. Clone the repository
2. Install dependencies `yarn`
3. Start dev server: `yarn dev`
4. Navigate to `https://localhost:3000/` to see the main page served and hot-loaded.

## Documentation

### Tech stack

The tech stack of this repository follows industry standards with NextJS as a base, Typescript, CSS, and TSX files as the meat, and a variety of dependencies as toppers. (Not to make the tech stack sound like a soup recipe.) Dependencies that are used include:     

- *cloudflare/stream-react*: library to use component to stream Jupiter intro video (streamed from CloudFlare CDN)
- *emailjs/browser*: library used to record emails 
- *vercel/analytics*: vercel library to record analytics
- *vercel/postgres*: vercel library to set up database that records emails
- *lottie-web*: library to load, process, and display a lottie JSON file (for the cover of jupiter)
- *react-use*: library of helpful hooks
- *styled-components*: library for dynamically styled TSX components

### File structure

- *app*: holds the actual pages of the repo as well as api stuff (that can honestly be improved as it was done in a rush)
  - *about*: has the CloudFlare link
  - *admin*: see important links to see what this is
  - *api*: stuff for collecting emails
  - *contact*: contact page, sends out as an email to jupiter
  - *issue*: where all the article content lives
    - *1*: issue 1 content
    - *2*: issue 2 content
- *components*: all reusable components that are repeated throughout the repo
  - *article-base*: the parent tags for all article pages
  - *base*: the parent tag for home page and about and contact
  - etc.
- *utils*: contains all hooks, helpers, constants, and shared styled objects and types for use across the whole repo

## Important links

- *jupiter-mag.com/admin*: view all emails that have been collected. Contact Nishat for password.

## TODO'S

There are a plethora of tasks, improvements, and spikes that can be done to improve this repository. Many of these are captured with a `// todo` comment, explaining what needs to be done. These todo's are just suggestions and there may be solutions that are even better than what is proposed in the comment.