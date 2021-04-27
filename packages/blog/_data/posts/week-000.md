---
title: "0 - Project Structure"
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2021-04-18T05:35:07.322Z"
author: "avkat"
excerpt: "The zero-th week of work, planning to be precise, deciding the structure of how the project will work and how will the code be arranged so as to allow expansion for a wider support. This post covers it all, along with the decision that was made and why not others."
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

The first week - planning, discussions, disagreements and a few violent murders, all to decide what should the project look like.

Now I know the topic doesn't sound interesting. That's because it isn't at all. But it was reaall important to address.

[TLDR](#tldr)

# Why so much trouble?

There are many reasons on spending a hell lot of time on folder structure. Ours were:

- Future of the project.
- Code quality.
- Future of the project.
- My OCD.
- Future of the project.

So as you can see, the main reason was the future. We do have some goals which we don't know how we're gonna achieve, but we wanted to start the project in a way that it can grow, and that there is no hesitation in contribution.

# What we considered?

There are many options available for such big project. My first instinct was to create one main repo and some other small repos, which will all be linked as submodules.

Now I know that approach does not make any sense at all, but I really liked the idea of a repo inside a repo. Unfortunately, it being a symlink broke my heart and sent me back to look for answers.

While searching, one of the major things that I sought was lightweight dev setup. Now I know it has its not a great idea but hey, my laptop can barely run vs-code properly. I did not want to spend most of my time waiting for it to unfreeze.

# The Answer.

Even though I wanted to avoid it at all costs, the final resort was the monorepo structure. For those of you who don't know, its like all your packages in one monolith of a repo.

Why did I not want it?

- Central node_modules. My coc.nvim ts-server could not find them so now I am stuck using VS code for this whole project, which isn't bad. Its just heavy.
- Makes it hard for contributors who only want to contribute to one part of the package because of heavy setup.

I know the pros should have been written first but I am seriously sick of this lagging.

Why I do want it?

- Central node_modules. (Old pc also has old internet driver and IO speeds.)
- Everything at one place. (All commits count. 😉)
- One place to setup CI/CD, husky, and other tools....

# TLDR

Lerna managed monorepo structure, Haven't decided on the CI-CD workflow yet. Some packages will be on npm while others will be served via GitHub Releases.(You'll know when they come out)
