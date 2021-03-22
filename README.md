# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Yelaine Linares**

Time spent: **6** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough
Winning
![](https://i.imgur.com/MMalaXq.gif)

Losing/Restarting
![](https://i.imgur.com/HT2FkDN.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[Used this to incorporate Math.random() function:
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
Used this to style the game buttons with images:
https://www.freecodecamp.org/news/a-quick-guide-to-styling-buttons-using-css-f64d4f96337f/]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[With very little experience in web development, it was a bit difficult to implement some of the more advanced optional features. When adding the feature of three strikes, I had a few bugs when changing the game logic to handle the guesses. Normally, after the player guesses incorrectly, it automatically ends the game. In order to give the player more lives, I had to replay the same clue sequence instead of moving on and showing the next clue. When I had previously changed it to move on and reveal the next clue, the progress counter was not on the same number as the guess counter, so it would mark it wrong and then lose a life even when the guesses were correct. Due to this bug, I had to do some print debugging to see what my values for my different variables were at the time. This helped me visualize the logic of the game and figure out that my progress counter was not restarting. Now, when the player guesses the wrong button, an alert pops up on the screen that says it was an incorrect guess, the player loses a life which is demonstrated by one of the hearts on the screen being hidden, and then the clue sequence is repeated so the player can try again. Another challenge I faced was designing the website because CSS has a multitude of properties and styles, so I was unsure of which ones I had to use for certain features. Fortunately, the pre-work provided a good background on developing this game with links that helped me customize the buttons.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[With more time to work on this project and gain more knowledge of web development, I would have wanted to create a tune with the sounds of the game button. For instance, the pattern that the user would have to guess would sound like a real song with rhythm. This would make it more enjoyable to listen to as the player tries to guess the pattern and would also help them remember the pattern more effectively. Tying this with the randomly generated pattern, the frequencies of each button would change so the order would still produce a nice melody. Another feature I would have wanted to implement would be a timer with a display. It would countdown the seconds the player has to finish the entire pattern on that specific turn. I would implement a buzzer sound that alerts the user when the time is up, and if the player did not finish guessing the pattern on time, they would get a strike. A progress bar would also be something I would have wanted to spend more time implementing so the player knows how much of the pattern they are missing to win the game. Depending on the theme of the game, I could add an image that slowly moves up in certain increments of the bar. Overall, these are just a few additional features that would have made the game more personalized to my liking. ]



## License

    Copyright [Yelaine Linares]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.