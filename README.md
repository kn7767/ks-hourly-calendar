# Hourly Calendar 

## Project status
The site is not yet complete. Although the input values are stored in the local storage, the input itself does not stay on the page when the page is reloaded. Instead of 9 separate save buttons, there is only one save button that saves information on the entire page, including sections that were not filled in. 

To combat the issue of resetting the local storage on each save (because the inputs do not stay when reloaded yet), I added an <if (var !="")> condition to prevent previously added tasks from being erased in the console.log. A "Clear All" button was unecessarily added for a better understanding of the local storage. 

Additionally, I am still attemping to add time blocks and an indication of the current hour on the scheduler. 

## Description
This hourly calendar is a daily scheduler that schedules by the hour in a workday, and lets the user know the current hour, as well as what hours have passed and how many hours are left in the day.


## Links
Live Site:
https://kn7767.github.io/ks-hourly-calendar/

Repo:
https://github.com/kn7767/ks-hourly-calendar 

## Visuals
(./scheduler.png)

## Installation
git clone "https://github.com/kn7767/ks-hourly-calendar.git"

## Usage
Users can type their to-do list by the hour by typing in the input boxes next to the hour tasks should be started by. Users can save their chart by clicking the "save" button on the bottom right so their schedule is not lost.

## Support
knguy219@ucr.edu

## Authors and acknowledgment
Starter code: <https://github.com/coding-boot-camp/super-disco>

## License
None
