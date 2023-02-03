# Trakit: The Simple Migraine Tracker

Easy to use migraine tracker. When experiencing a migraine, you know you need to keep track of symptoms and how things are progressing but looking at screens can be difficult. Trakit aims to make this process easier by focusing on the most important data so you can focus on feeling better while still having the data available to discuss with your neurologist. 

Feel free to make an account and try it out here: https://trakit.cyclic.app/

![](/trakit%20resized.png)


# How It's Made:
**Tech used:** EJS, Tailwind, DaisyUI, Javascript, Node.js, MongoDB, Passport, hosted on Cyclic

The frontend of this project is handled through EJS, Tailwind, and DaisyUI. This was my first deep dive into Tailwind and while it can create some messy HTML (or in this case EJS), I had a lot of fun seeing what was possible. Initially the project was built out with Bootstrap but after playing around with Tailwind that seemed like a better direction for what I was looking for. For the database that is all handled through MongoDB and Mongoose for the schemas with authentication managed with Passport. The bulk of the heavy lifting is done through Javascript/EJS, handling the middleware, controllers, and routes.

# Future Updates:
* User account page
* CSV download of entries
* Overview statistics


# Lessons Learned:
While I feel that there were lots of small lessons learned throughout this project about how to plan things out and how to approach my code, the biggest take away I have is to never stop exploring. I had so much fun playing around with Tailwind and EJS for the first time and exploring new technologies. I will definitely be approaching future projects with the same curious mindset where timelines allow and really allowing myself to explore options that are new to me. 