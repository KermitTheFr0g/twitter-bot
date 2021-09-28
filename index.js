const client = require('./twit');

function reverseString(text){
    let splitString = text.split('');

    let reverseArray = splitString.reverse();

    let joined = reverseArray.join('');

    return joined
}

let stream = client.stream('statuses/filter', { follow: '1090372176606347265'})

stream.on('tweet', async function(tweet) {

    if(tweet.in_reply_to_status_id == null){
        const {data} = await client.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: '@' + tweet.user.screen_name + ' ' + reverseString(tweet.text)})
        console.log('Replied with - ' + reverseString(tweet.text))
    }



})

