const client = require('./twit');

// very quick way to reverse a string
function reverseString(text){
    let splitString = text.split('');

    let reverseArray = splitString.reverse();

    let joined = reverseArray.join('');

    return joined
}


// defines the stream watching for a status from specific user
let stream = client.stream('statuses/filter', { follow: '{USER ID OF THE ACCOUNT TO WATCH}'})

// when a tweet is received this function is run
stream.on('tweet', async function(tweet) {

    // checks to see if the tweet is a reply
    if(tweet.in_reply_to_status_id == null){
        let reversedText = reverseString(tweet.text)

        const {data} = await client.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: '@' + tweet.user.screen_name + ' ' + reversedText})
        console.log('Replied with - ' + reversedText)
    }

})

