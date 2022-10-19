User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

You should add a quality description of the project, a screenshot of the application, and a link to the deployed application.

#############333
# Hourly Calendar 

## Project status
The site is not yet complete. Although the input values are stored in the local storage, the input itself does not stay on the page when the page is reloaded. Instead of 9 separate save buttons, there is only one save button that saves information on the entire page, including sections that were not filled in. To combat the issue of resetting the local storage on each save (because the inputs do not stay when reloaded yet), I added an <if (var !="")> condition to prevent previously added tasks from being erased in the console.log, although it will not be necessary if I can get the input values to save on each reload. A "Clear All" button was unecessarily added for a better understanding of the local storage. 

Additionally, I am still attemping to add time blocks and an indication of the current hour on the scheduler. 

## Description
This hourly calendar is a daily scheduler that schedules by the hour in a workday, and lets the user know the current hour, as well as what hours have passed and how many hours are left in the day.


## Badges
N/A

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
No additional requirements. 

## Usage
Users can type their to-do list by the hour by typing in the input boxes next to the hour tasks should be started by. Users can save their chart by clicking the "save" button on the bottom right so their schedule is not lost.

## Support
knguy219@ucr.edu

## Roadmap
N/A

## Contributing
N/A

## Authors and acknowledgment
Starter code: <https://github.com/coding-boot-camp/super-disco>

## License
None
