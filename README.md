# ioetOrlinHernandez
## Exercise

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

Example 1:

INPUT
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00


OUTPUT:
ASTRID-RENE: 2
ASTRID-ANDRES: 3
RENE-ANDRES: 2

Example 2:

INPUT:
RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:
RENE-ASTRID: 3

## Overview
For this challenge I decided to go for a JavaScript alternative as my main tech and JEST library for testing purposes.


## Architecture
*  utils directory containing core functions 
* .gitignore
* README.md
* app.js main executable
* schedule.txt mock data
* testingData.txt mock set of data for JEST testing library
* package.json

## Approach
First ran over my input, outputs and edge cases whith that out of the way, proceed to implement a solution, where I tried
to re-organize my main task into samller inheritable functions.
* mapSchedules.js:
  function(schedule)- Resposible for mapping the string into days for later key purposes
  function(file)- create an object for iterating through the array and saving each employee schedule
* numberOfCoincidences.j:
  Evaluate how many times does a coincidence exists in an employee's schedule with another existing employee
* sameTimes.js:
  Evaluate how many times schedules are equal or within acceptable time frames.
  
* stringifyData.js:
  fs library from javascript in order to read .txt and converted into a utf-8 string.

## Methodology
This solution was developed under clean code patterns such as:
* Test Driven Development (TDD) writing automated tests before the code; retest after any change.
* Don’t Repeat Yourself (DRY) put it in one component and call that component when needed. 
* Single Responsibility Principle (SRP) – components should do only one thing

## Instructions to Run the Program Locally
In order to execute the solution is necessary to previously install node and npm latest versions.
*Install dependencies:
```npm install```
* run main app: 
```node app.js```
* run test cases: 
```npm test```
