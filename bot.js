const client = require('./twit');
const config = require('./config.json');

function chooseReply(){
    let reply = config.responses[Math.floor(Math.random() * config.responses.length)]
    return reply
}

async function streamTweets(){
    // defines the stream watching for a status from specific user
    let stream = client.stream('statuses/filter', { follow: config.userIDs.join(',') })
    console.log('Twitter Account live and active')

    // when a tweet is received this function is run
    stream.on('tweet', async function(tweet) {

        // checks to see if the tweet is a reply
        if(tweet.in_reply_to_status_id == null && tweet.retweeted == false){

            let tweetReply = chooseReply()
            const {data} = await client.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: '@' + tweet.user.screen_name + ' ' + tweetReply})
            console.log('Replied to ' + tweet.user.screen_name +  ' with - ' + tweetReply)
        }
    })
}


streamTweets()