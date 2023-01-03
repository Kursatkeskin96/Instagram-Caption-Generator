let love = document.getElementById('love');
let friends = document.getElementById('friends');
let family = document.getElementById('family');
let nature = document.getElementById('nature');

let loveQuotes = [
    "One smile cant change the world, but your smile changes mine.", 
    "I'm wearing the smile you gave me.",
    "The best things in life are better with you.",
    "I want to be with you until my last page.",
    "Every day with you is the best day of my life.",
    "P.S. I love you.",
    "Home is wherever I'm with you.",
    "I can't live without you, and I don't want to try.",
    "The peanut butter to my jelly.",
    "Together is a wonderful place to be.",
    "I'm happy to be your big spoon.",
    "You're the only person I would share my snacks with.",
    "Take me back to the night we met.",
    "You're my end and my beginning. Even when I lose, I'm winning."
];   

let friendsQuotes = [
    "Friends 'till the end.",
    "A true friend is one soul in two bodies.",
    "Your vibe attracts your tribe.",
    "Friends don't let friends do silly things alone.",
    "I'll even send you the photos I look bad in.",
    "Love is beautiful, friendship is better",
    "Good Times + Crazy Friends = Great Memories!",
    "I don't know what I did to deserve a best friend like you.",
    "Best friend? Nah. She's my sister.",
    "Friends who slay together, stay together.",
    "Real queens fix each other's crowns.",
    "Life's too short and so are we.",
    "We don't see any competition."
];

let familyQuotes = [
    "We have our downs but we always come out of them stronger and together as a family.",
    "Every family has a story. Welcome to ours!",
    "Couldn't have done it without my family.",
    "amily love is unique from other forms of love.",
    "A family is like branches on a tree. We all grow in different directions, but our roots remain as one.",
    "Living our dreams. Creating family memories.",
    "Thankful that I can call you family.",
    "Friday ain't my favorite F word. It's family.",
    "Collecting beautiful moments with my family.",
    "Laughter brings a family closer."
]

let natureQuotes = [
    "Study nature, love nature, stay close to nature. It will never fail you.",
    "The Sea, once it casts its spell, holds one in its net of wonder forever.",
    "If you truly love nature, you will find beauty everywhere.",
    "I felt my lungs inflate with the onrush of scenery — air, mountains, trees, people. I thought, this is what it is to be happy.",
    "For a time, I rest in the grace of the world, and am free.",
    "I like this place and could willingly waste my time in it.",
    "The Earth is what we all have in common.",
    "I don't like formal gardens. I like wild nature. It's just the wilderness instinct to me, I guess.",
    "The poetry of the earth is never dead.",
    "Nature, time, and patience are the three great physicians." 
]

function newQuote() {
    if(love.checked){
    let randomNumber = Math.floor(Math.random() * (loveQuotes.length));
    document.getElementById('quote').innerHTML = loveQuotes[randomNumber];
    } else if(friends.checked) {
    let randomNumber = Math.floor(Math.random() * (friendsQuotes.length));
    document.getElementById('quote').innerHTML = friendsQuotes[randomNumber];
    } else if(family.checked) {
    let randomNumber = Math.floor(Math.random() * (familyQuotes.length));
    document.getElementById('quote').innerHTML = familyQuotes[randomNumber];
    } else {
    let randomNumber = Math.floor(Math.random() * (natureQuotes.length));
    document.getElementById('quote').innerHTML = natureQuotes[randomNumber];    
    }
};