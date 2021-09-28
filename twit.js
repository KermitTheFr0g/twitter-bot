const twit = require('twit')


const client = new twit({
    consumer_key: 'ruSi6jtZZtpYZUVz0PnwHZpmh',
    consumer_secret: '6OgJgpW8ynvEpWxcEJLyXHn2g4FbJVovmnz75sK3lVwpgEBQ6T',
    access_token: '1239483313326305280-TKcI8jJw1WGhIMiW9HPoPrMZQkDyVQ',
    access_token_secret: 'qYeQNdH2HEkAOVnwBKfSjNOlwcPtDzeyN9IrgjgrdfW6Z'
})

module.exports = client;
