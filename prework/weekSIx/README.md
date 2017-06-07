# Prework Week 6

JavaScript can do some amazing things to our web pages! But sometimes we would rather write less code and accomplish the same things.

This is where a code library like [jQuery](http://www.jquery.com) comes in! jQuery is written in JavaScript and allows us to use its built-in functions instead of writing the longer raw  JavaScript to do things. jQuery really shines in DOM manipulation and Event handling.

Look at all the topics you covered below, impressive. I am sure by now you have seen how powerful jQuery is and are excited to get started trying it.

## Topics Covered
- File Linking / Libraries
- Document Ready
- Targeting (Element, Class, ID)
- Events - Click, Mouse In, Mouse Leave, etc.
- Animations/effects/timing
- Fade
- Slide / Animation Speeds
- `$(this)`
- And more!

## Assignment
This week's homework is broken in to three directories (or folders). The first two directories include smaller reviews of selectors and events. The third directory brings everything together to build a memory game.

As always, start off by forking and cloning this repository from Github. Open the code up in Atom to get started.

Don't forget to **keep the existing code as is** and ignore any code that is commented: `// -- DON'T TOUCH CODE BELOW --`. Also, remember `console.log()` is your friend and you can use it in conjunction with the browser console to see the output of your code as you go.

### Files Provided

This week you'll be completing the scripts in the following files. Once again, we have different levels of difficulty contained within each file.

- [ ] *1_selectors/script.js* (Base)
- [ ] *2_burrito-cat/script.js* (Base, Hard)
- [ ] *3_memory-game/script.js* (Pro)

A few of this week's assignments need some additional explanation.

### 2 - Burrito Cat

Burrito cat needs a navigation bar to help it hide further. Using the existing HTML in `index.html`, add the jQuery event handling code to help burrito cat

* fade in and out
* hide and show itself
* animate itself

When a button is clicked, append to the div with the id of `clickList` a `p` tag with the event. For example, after clicking "Fade Me!" twice there should be 2 `p` tags in the "clickList" div that say "toggleFade".

There are in-line comments in the `script.js` explaining what should happen.

#### Hard Mode
Add a reset button to reset the changes made by the animation.

### 3 - Memory Game (Pro Mode)
Inside the *assignment* folder there will be a *memory-game* folder with all the code you need to get started. The problem is described in this markdown file: [memory-game.md](assignment/memory-game/memory-game.md)

#### Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
---  | ---
Base | required 
Hard | optional, stretches your understanding
Pro  | optional, stretches your understanding and may require additional research

### Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
