# Rental Rules
This is a web application for viewing, creating and editing rental rules.

[Click here to see the live App](https://rental-rules.netlify.app/)

This application is developed in Reactjs.
Jsons are provided to fetch the data from API.

## Structure of the App

The App is developed in ReactJs. It is created with the help of **React cli**. No framework is used for CSS and modeling purpose. Home page of this app is divided into 2 parts

- Header
- Main Part

### Header
It always stays on top of every page, this component is called in App component, so need to write only once in the whole app. Header has the app menu(Navbar).


### Main Part
As the name suggests it is the main body of the App. This App has 2 main pages.

- List of existing rules
- Create/Edit a rule

#### List of existing rules
This page having the list of all existing rental rules. Those rules are coming from an API. That API provide JSON object of the rules and then the component do some operation to make that JSON readable.

#### Create/Edit a rule
This is a smart comopnent, it is used to create a whole rule which consists of one or many conditions. For every condition there is a component which has 3 inputs and return data as user changes it.

### Data Structure
That is the trickiest part of the assignment. To make the application scalable and flexible, I have come up with this data structure to create a rule.

Every rule is an array of array. Every element(which is an array) of the upper array is connected to each other with OR condition and every element(which is a JSON object) of the lower array is connected to each other with AND condition.

For ex:-
Rule: Amount > $5000 OR Item = TV
Data representation:- 
    [
        [
            {
                fieldName: 'Amount',
                operator: '>',
                value: '5000'
            }
        ],
        [
            {
                fieldName: 'Item',
                operator: '=',
                value: 'TV'
            }
        ]
    ]

Rule: (Amount > $5000 AND Age > 30) OR Item = TV
Data representation:- 
    [
        [
            {
                fieldName: 'Amount',
                operator: '>',
                value: '5000'
            },
            {
                fieldName: 'Age',
                operator: '>',
                value: '30'
            }
        ],
        [
            {
                fieldName: 'Item',
                operator: '=',
                value: 'TV'
            }
        ]
    ]
