const client = require('./twit');

// very quick way to reverse a string
function reverseString(text){
    let splitString = text.split('');

    let reverseArray = splitString.reverse();

    let joined = reverseArray.join('');

    return joined
}

function chooseMethWord(currentWord){
    // check if capitalised
    if(currentWord == currentWord.toUpperCase()){
        let capital = true
    }

    // check ending

    // ed
    let ending = currentWord.subString(currentWord.length - 2);
    if(ending.toLowerCase() == 'ed'){
        if(capital){
            return 'METHED'
        } else {
            return 'methed'
        }
    }

    // ing
    ending = currentWord.subString(currentWord.length - 3);
    if(ending.toLowerCase() == 'ing'){
        if(capital){
            return 'SMOKING METH'
        } else {
            return 'smoking meth'
        }
    }
    // TODO add any more endings

}


async function searchUser(){
    const {data} = await client.get('users/search', {q: 'KermitTheJuicer'})
    console.log(data[0].id_str)
} 

function methify(text){
    let methed = text.split(' ')
    methed[Math.floor(Math.random() * methed.length)] = 'meth';
    if(methed.length > 10){
        let randomIndex = Math.floor(Math.random() * methed.length)
        methed[randomIndex] = 'meth';

    } else if(methed.length > 20){
        let randomIndex = Math.floor(Math.random() * methed.length)
        methed[randomIndex] = 'meth';

        randomIndex = Math.floor(Math.random() * methed.length)
        methed[methed[randomIndex]] = 'meth';

        randomIndex = Math.floor(Math.random() * methed.length)
        methed[methed[randomIndex]] = 'meth';
    }

    methed = methed.join(' ')
    return methed
}

function streamtweets(){
    
    // defines the stream watching for a status from specific user
    let stream = client.stream('statuses/filter', { follow: ['761207918930890756', '1090372176606347265', '902213991321272321', '1422505784387178528', '859024346991525888', '978358237065105409', '781525632308109313', '804060769021284353', '854375807258677248', '996838341852229634'].join(',') })

    // when a tweet is received this function is run
    stream.on('tweet', async function(tweet) {

        // checks to see if the tweet is a reply
        if(tweet.in_reply_to_status_id == null && tweet.retweeted == false){
            //let reversedText = reverseString(tweet.text)

            //const {data} = await client.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: '@' + tweet.user.screen_name + ' ' + reversedText})
            //console.log('Replied with - ' + reversedText)

            let methtext = methify(tweet.text)
            const {data} = await client.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: '@' + tweet.user.screen_name + ' ' + methtext})
            console.log('Replied to ' + tweet.user.screen_name +  ' with - ' + methtext)
        }

    })
}
streamtweets()