# Mr. Roboger's Neighborhood

#### HTML, CSS, JavaScripts files,  06/12/2020

#### By **Evgeniya Chernaya**

## Description

Webpage, that takes number from a user and returns a range of numbers from 0 to the user inputted number, but numbers that contains [1, 2, 3] digits are replaced to different words. 

## Setup/Installation Requirements

* https://janecher.github.io/robogers-neighborhood/index.html
* Clone/download repository (click green button "clone or download" and click downlown ZIP or use "git clone https://github.com/janecher/robogers-neighborhood.git" command in your terminal)
* Open index.html file in the browser

## Spec

| Behavior | Input | Output|
|----------|-------|-------|
| Takes User input and returns it | Text | Text |
| Checks if input is Correct (input must be a positive interger number) | text | "Incorrect input, your input should be a number" |
| The program returns a range of numbers from 0 to the users inputted number | 4 | "0, 1, 2, 3, 4" |
| Numbers that contain a 1: all digits are replaced (all digits) with "Beep!" | 1 | "Beep!" |
| Numbers that contain a 2: all digits are replaced (all digits) with "Boop!" | 2 | "Boop!" |
| Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?" | 3 | "Won't you be my neighbor?" |
| Numbers that contain a 3 have the main priority | 13 | "Won't you be my neighbor?" |
| Numbers that contain a 2 have the second priority | 21 | "Boop!" |
| User should be able to enter a new number and see new results over and over again. | 5 | "0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5" |

## Support and contact details

Send me an email: evgenya.chernaya@gmail.com

## Technologies Used

HTML, CSS, JavaScript, Bootstrap, jQuery

### License

_This software is licensed under the MIT license_

Copyright (c) 2020 **Evgeniya Chernaya**.