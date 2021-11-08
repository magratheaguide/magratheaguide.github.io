# Magrathea

Open source coding resources for forum-based roleplaying sites.

## What Is Magrathea?

**Forum RP sites are about writing.** And, tangentially, they’re about code. RP sites can function just fine with the default code hosts provide, but we want these spaces to feel welcoming and homey, thematic and inspiring, we want them to be places we’re eager to cozy up in, sometimes as often as daily. But we’re writers, first and foremost, and these are writing spaces. How can we get what we seek out of code and also keep it out of the way as much as possible so we can focus on what we’re really here to do?

Magrathea is meant to be one possible answer to that question. It’s a collection of resources, and an offer of help. It’s an effort to make creating, maintaining, and participating in RP sites easier and more accessible. It’s a way to give back to our very unique and special community. And it won’t cost you any money.

## What Does Magrathea Offer?

So what does Magrathea offer? Broadly speaking, free, high quality, open source code. But that’s an extremely brief way to say a whole lot, so let’s break it down.

### Free and Open Source

The resources provided through Magrathea don't cost you any money. There are some terms you'll need to follow, but Magrathea’s publicly available projects exclusively fall under open source licenses[^openSource], whose terms are meant to be straightforward and to benefit creators and communities. In fact, **the terms of most Magrathea projects are as simple as providing credit**. You can get full details for any specific Magrathea project from its associated license file.

[^openSource]: If you've never heard of "open source" before, GitHub's [Open Source Guides](https://opensource.guide/starting-a-project/#what-does-open-source-mean) offers a great definition. The ReadME Project's ["A Dev's Guide to Open Source Software Licensing"](https://github.com/readme/guides/open-source-licensing) is a helpful and more detailed rundown. And the "Choose a License" site provides a scannable [summary of some of the most popular open source licenses](https://choosealicense.com/licenses/).

### High Quality Code

"High quality code" here means code that tries its darnedest to be both approachable and accessible.

#### What Is Approachable Code?

Approachable code is code that is:

- **Organized** in a considered and consistent way that includes clear names and structure
- **Easily maintained**. Someone trying to fix a bug or make an update in the code should be able to understand the ripple effects of doing so
- **[Self-documenting](https://en.wikipedia.org/wiki/Self-documenting_code)**, and includes well-structured supplemental documentation as needed
- **Built on modern standards**, and so is free of outdated, deprecated, or obsolete ways of doing things
- **Something others can learn from** or make use of in ways that jumpstart or simplify their own efforts

#### What Is Accessible Code?

Anybody who wants to write should be able to participate in our community regardless of the ways they need or want to approach our sites. From a coding standpoint, that kind of inclusivity doesn’t just magically happen, it’s something we need to actively think about and support. It's about respecting the ways that people choose to use technology, because some circumstances leave little to no choice and because we can never possibly choose better for others than they can choose for themselves. That, for a few non-exhaustive examples, means coding for people who:

- Use a screen reader
- Use input methods other than mice to navigate and interact with sites, including keyboards
- Use touchscreen devices
- Are negatively affected by or prefer to avoid excess motion
- Modify their browser’s default font settings such as increasing font size or swapping in a more legible font
- Struggle with insufficient text contrast
- Find it difficult to interact with small clickable areas
- Can’t or struggle to differentiate between things based on color alone
- Have slower or lower bandwidth internet connections
- View the site from screens with different sizes or resolutions
- View the site in brighter or darker environments, or make adjustments to their screen's brightness
- Want or need to view a site in a language other than English, including languages that are written in different directions than English

(For a more eloquent list than this, see [Inclusive Design Principles](https://inclusivedesignprinciples.org).)
                            
This doesn’t mean the codes provided through Magrathea will be perfectly accessible always, but it is a commitment to doing the best we can and learning from our shortcomings (so please do reach out if you notice something that could be better!).
                                
---
                            
Writing code that’s approachable and accessible isn’t always easy, but if we keep it in mind upfront and throughout the process, we can hopefully remove a lot of friction for a lot of folks on a lot of fronts.

## What Resources Are Currently Available?

All of the currently available Magrathea codes live as [repositories on GitHub under the Magrathea organization](https://github.com/rp-magrathea/).[^github] Only a few callouts will be featured here.

[^github]: If you’re not familiar with GitHub, there are a lot of great learning resources out there, including [GitHub’s own documentation](https://help.github.com/en/github) and [Learning Lab](https://lab.github.com/githubtraining/introduction-to-github).

As part of Magrathea, we also occasionally take on commissions to build out complete custom themes/skins. You can [find the commission terms here](#how-do-custom-commissions-work).

### Vogsphere

The Claim Code Generator.

[Vogsphere](https://github.com/rp-magrathea/vogsphere) is a tool that enables you to create a claims form on your site. Instead of editing code, your members can just fill out that form to generate exactly what they need to post to make their claims. No more code typos for you to deal with, no more trying to sift through code for them. Win-win.

- [Learn more about Vogsphere](https://github.com/rp-magrathea/vogsphere)
- [Try the Vogsphere demo](https://magrathea.guide/vogsphere/src/vogsphere.html)

## How Do Custom Commissions Work?

Long story short, Magrathea commissions work a bit differently than your typical commission. You pay no money, you're asked to provide the graphics, and the whole thing comes with a community-contributing twist: **We donate the full theme (minus the graphics) to the community when you’re not using it anymore for the site it was made for.**

And as for the long story...

### You Get

- **You get** a complete, custom theme[^theme] for your site (which can be on any forum host[^host]) and it's coded in an [approachable](#what-is-approachable-code) and [accessible](#what-is-accessible-code) way
    - Includes all member templates (posting, comm, dev, requests, etc.)
    - Includes all admin templates (announcements, claims, member directory, etc.)
    - Includes application and shipper templates
    - Includes the guidebook (rules, setting, member groups, etc.)
    - Includes elements that change based on member group
    - Includes whatever else you might need coded. Let us know what you’re looking for!
- **You get** installation and configuration of the code
- **You get** ongoing support, in case, for example, you ever run across a bug that needs fixing or a need a new template

[^theme]: If you come from the Jcink subset of the community, you’re probably more familiar with the term "skin." We use "theme" here instead because it’s the more broadly used term, but they mean the same thing.

[^host]: While we do accept commissions for any forum host, please know that we only have experience with Jcink. We’re fully capable of and happy to learn how to build themes for others hosts, but that extra bit of learning will make the commission take more time. Thanks for your patience!

### You Have the Option

- **You have the option** to access the code at all times (via GitHub), even while it’s under development
- **You have the option** to provide feedback whenever. We’d love to hear what you think early and often!
- **You have the option** to choose which areas of code get worked on next

### You Provide

- **You provide** your thoughts, wishes, and feedback! This theme will be made to your specs, with input from us on keeping it accessible
- ****You provide** the graphics and images. This includes things like backgrounds and staff avatars**

### We Can Discuss Who Provides

- **We can discuss who provides** fonts
- **We can discuss who provides** icons
- **We can discuss who provides** the color palette. We’ll work with you here, too, to make any necessary tweaks for better accessibility

### We Agree

- ****We agree** that when the site closes, dies, or moves on to a different theme, Magrathea crew will make the complete theme (minus any graphics, fonts, or icons you provided) freely available under an open source license to anybody who wants to use it, learn from it, modify it, whatever.**
**This means the theme is exclusive to your site while your site’s around and then afterward becomes a donation that contributes to the wider community.**
Examples of "closes or dies" include such situations as:
    - The site hasn’t opened yet, but development on it has stopped. We haven’t heard from you in over 30 days or you have explicitly said that the site won’t open or has in some way been shelved
    - The site was open, but there have been no in-character posts or plotting posts in over 30 days
    - The site was open, but you’ve since taken the board offline or announced that it will be closing
- **We agree** to give each other and any supplemental resources we use due credit
- **We agree** to respect the licenses of any supplemental resources we use. This can include anything from fonts to bits of functionality
- **We agree** that either party can opt out of the project. We'll all let each other know what's going on and we'll all get to keep a copy of whatever code's already been completed to do with as we will

### You Can

- **You can** make any edits you want to *your own copy* of the code
Please note, if you instead choose to add code changes to the project's Magrathea GitHub repository specifically, those changes will all be included in the open source version later on. You will, however, be given credit for your contribution
- **You can** use the theme for any site you wish. The theme itself will still be created for one site in particular, and that one site is what counts for determining when to make the theme publicly available

### Magrathea Can

- **Magrathea can** complete any unfinished theme to offer as an open source resource. This could happen if, for example, the site it was originally intended for dies in development
- **Magrathea can** make a cancelled, unfinished theme publicly available as an open source resource as is, without finishing it. (Graphics, fonts, and icons you provided will still be removed before this happens)

## Commissions Status

**Commissions are currently closed.** To be notified when commissions open again, drop by our [Discord server](https://discord.gg/JN3KQ2D) and turn on notifications for the `#announcements` channel!

## Frequently Asked Questions

### Why don't you provide graphics in custom commissions?

Graphics manipulation is not a Magrathea specialty. Offering *high quality* resources is an important part of Magrathea for us and, since graphics really aren't in our wheelhouse, this isn't an area where we can confidently meet the standard we've set.

That said, we actually see the lack of graphics as a benefit overall. It encourages you to put your stamp on the theme, and for others to do the same when the theme becomes available open source. This is one (very important) way that future uses of the theme can differentiate themselves from each other, so even sites using the same theme feel more visually distinct.

### Why GitHub?

[GitHub](https://en.wikipedia.org/wiki/GitHub) is built on top of [Git](https://en.wikipedia.org/wiki/Git), an extremely popular distributed version control system (aka means of collaborating on code, each from your own computer, in a clean, structured way that tracks all changes). GitHub itself provides a way to use Git while adding a lot of great features on top. You can search for code repositories, know how many people have starred that repo, see what’s changed, open a bug or request features, manage projects, write wikis for those projects, and more. You can even (with respect to the repo’s license) branch off your own copy of the code to tinker with and use. I use GitHub and Git for Magrathea because they’re built to serve exactly this type of project and are great at it.

And the cherry on top? **Open source projects on GitHub can accept ["pull requests"](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests). This means that anybody who fixes a bug or adds a new feature can contribute those changes back to the original project, and will automatically and visibly be given credit for their contribution.** This can be a great way to help community resources continue to grow and improve. It can also be a great way to learn!

### Does this all mean you’re opposed to paid commissions?

Not at all! We're well aware of the amount of time, thought, energy, and heart that goes into writing code for others and we absolutely believe that folks should be compensated for their work. We are fortunate enough to be in a position where we are able to provide resources for free, and we believe doing so actually benefits those who offer paid commissions. We believe the transparency into the process that we can offer here can help non-code savvy folks see just how much work all of this actually is, as well as recognize well-written code when they see it and better appreciate the value of it.

### Would you consider taking payment instead to keep a commission closed source? Or only making part of it open source?

No, sorry. Magrathea is meant to benefit our community as much as possible, and doing either of those things limits the potential benefits that could be provided. There are lots of coders out there that will take on commissions under those kind of terms though!

## Who Is Magrathea?

### Daine

- Software Engineer
- Has a Bachelor of Science in math and computer science
- Previously a software quality assurance engineer and a database engineer
- Always reads the instructions
- Collects board games (116 and counting)
- Serious nerd who loves to help

#### Where Is Daine?

- Discord: `daine#1078`
- [Personal site](https://thewildmage.dev)
- [Gallery of some past work](https://ko-fi.com/daine/gallery)
- [GitHub](https://github.com/thewildmage)
- [Glitch](https://glitch.com/@thewildmage)
- [CodePen](https://codepen.io/thewildmage)

## Get In Touch

- Point of contact: [Daine](#daine)
- [Updates and announcements](https://discord.gg/JN3KQ2D)
- [Magrathea on GitHub](https://github.com/rp-magrathea)
- [Magrathea on Discord](https://discord.gg/JN3KQ2D)
