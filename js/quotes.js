const quotes = [
    {
        quote : "Love is or it ain't. Thin love ain't love at all.",
        author : "Toni Morrison",
    },
    {
        quote : "Nah, It Was Dumber Than That.",
        author : "Cliff Booth",
    },
    {
        quote : "My name is Shosanna Dreyfus and this is the face of Jewish vengence.",
        author : "Shosanna Dreyfus",
    },
    {
        quote : "Auf Wiedersehen",
        author : "Dr. King Schultz",
    },
    {
        quote : "Say ‘Auf Wiedersehen’ to your Nazi balls!",
        author : "Hugo Stiglitz",
    },
    {
        quote : "Au Revoir Shoshanna!",
        author : "Hans Landa",
    },
    {
        quote : "The way to get started is to quit talking and begin doing",
        author : "Walt Disney",
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon",
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author : "Steve Jobs",
    },
    {
        quote : "When it rains look for rainbows. When it's dark look for stars.",
        author : "Unknown",
    },
];

const quote = document.querySelector("div#quote div#q");
const author = document.querySelector("div#quote div#aut");

console.log(quotes[0]);
console.log(quotes[parseInt(Math.random()*quotes.length)]);
console.log(quotes[Math.floor(Math.random()*quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `${todaysQuote.author}`;
