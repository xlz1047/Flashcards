# Web Development Project 2 - **Flower Flashcards**

Submitted by: **Xin Zheng**

This web app: **This is an interactive flashcard app designed to help users learn about various flowers and their meanings. Each card displays an image of a flower alongside its symbolic meaning. Users can click on the card to flip it, revealing the answer, and navigate through the cards using 'Next' and 'Previous' buttons.**

Time spent: **7 hours spent in total** 

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] *Visual style implemented: Easy cards have a light green border, medium cards have an orange border, and hard cards have a red border.*

The following **additional** features are implemented:

- [x] Cards can be navigated using 'Previous' and 'Next' buttons, allowing users to cycle through the entire set smoothly.
- [x] A hover effect on cards that scales them slightly for better interactivity.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='flashcard.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows.

## Notes

Describe any challenges encountered while building the app:

- **Image Loading Issues:** Initially, I faced challenges with loading images from the assets folder due to incorrect paths, which I resolved by double-checking the directory structure.
- **Card Randomization Logic:** Implementing the randomization of card display required careful management of state in React, which I addressed by ensuring that the next card logic was correctly tied to the random selection of cards.
- **Styling Consistency:** Ensuring consistent visual styles across different card categories took some time to finalize, but I learned valuable CSS techniques during this process.

## License

    Copyright 2024 Xin Zheng

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
