# Twitter Bot

## About the project
This project is a simple twitter bot that takes twitter userIDs and watches them for when they tweet. It can then be programmed to reply with a specific message to these users. Perfect for trolling your friends on twitter or just for fun.

## Getting started 
It is very simple to get started, however the first thing you're going to need is to have a twitter account. You can create one [here](https://twitter.com/). You are also going to need to apply for a twitter developer account this can be done here [here](https://developer.twitter.com/en/portal/dashboard).

### Installation
Here I am going to show you how to setup the twitter bot and where all of your twitter API keys need to be stored.
1. Clone the project
```sh
$ git clone https://github.com/KermitTheFr0g/twitter-bot.git 
```
2. Installing all of the NPM packagaes is the first step.
```sh
$ npm install
```

### Prerequisites
Once you have your twitter account and developer account setup you need to get your twitter API keys. These are going to be used in the next step.
1. Create a new file called .env
```sh
$ touch .env
```
Inside of this file is where the API keys will be stored. The file should look like this:
```
CONSUMER_KEY=<your_consumer_key>
CONSUMER_SECRET=<your_consumer_secret>
ACCESS_TOKEN=<your_access_token>
ACCESS_TOKEN_SECRET=<your_access_token_secret>
```

### Setup the bot
You are going to want to have a list of the twitter userIDs you want to watch. This is done by adding the twitter userID to a json file named `config.json`. The file should be in the same directory as the bot. The file should look like this:
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
$ npm run getUserID <username>
```
This will return the userID for the user you searched for, you can then add this userID to the `config.json` file. However, to use this script you will need to have the nodejs package `twit.js` installed and setup the twit client. So if you don't have these installed go back to the 

Along with having the userIDs for the accounts you want to watch but inside of `config.json` you will also need to include the responses that the twitter bot is going to make. This could be a single response or be multiple that you want to randomly choose from. The `config.json` file should look like this
```json
{
    "userIDs": [
        "123456789",
        "987654321"
        "123456789"
    ],
    "responses": [
        "response1",
        "response2"
    ]
}
```
Once we have the userIDs and responses we can start the bot.
```sh
$ npm run start
```
Now we have the bot up and running, anytime a user tweets that matches one of the userIDs in the `config.json` file the bot will reply with one of the responses.

## Further Development
Feel free to fork the project and make any changes you want. You can make the bot more complex by adding different replies for different types of tweets.

