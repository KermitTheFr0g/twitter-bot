const client = require('./twit');

async function searchUser(){
    let search = process.argv[2]
    if(!search){
        return console.log('Please enter a username to search');
    }
    const {data} = await client.get('users/search', {q: search })
    console.log(data[0].id_str)
} 

searchUser()