# Twitter Bot

## About the project
This project is a simple twitter bot that takes twitter userIDs and watches them for when they tweet. It can then be programmed to reply with a specific message to these users. Perfect for trolling your friends on twitter or just for fun.

## Getting started 
It is very simple to get started, however the first thing you're going to need is to have a twitter account. You can create one [here](https://twitter.com/). You are also going to need to apply for a twitter developer account this can be done here [here](https://developer.twitter.com/en/portal/dashboard).

You are also going to want to have a list of the twitter userIDs you want to watch. This is done by adding the twitter userID to a json file named `userIDs.json`. The file should be in the same directory as the bot. The file should look like this:
```json
{
    "userIDs": [
        "123456789",
        "987654321"
        "123456789"
    ]
}
```
There are two ways you can get the userID firstly through an external site like [TweeterID](https://tweeterid.com/) by simply searching the user's username. Secondly you can use the twitter API to get the userID, I have already created a function to do this for you. So inside of the terminal you can use the command
```sh
$ npm run getUserID --username=<username>
```
This will return the userID for the user you searched for, you can then add this userID to the userIDs.json file. However, to use this script you will need to have the nodejs package `twit.js` installed. so continue on to the next section if you don't know how to do this.

### Installation

