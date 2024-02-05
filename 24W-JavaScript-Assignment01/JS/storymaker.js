// Assignment 1 | COMP1073 Client-Side JavaScript
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
document.addEventListener("DOMContentLoaded", function () {
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");
const story = "";
const randomIndex = Math.floor(Math.random() * 5);
const studentNumber = document.getElementById("studentId");
// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");
const resetButton = document.getElementById("reset");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it

    countNoun1 = randomIndex;
    chosenNoun1.textContent = nouns1[countNoun1];
    storyParagraph.textContent = story;
    
}

function verb_on_click() {
    countVerb = randomIndex;
    chosenVerb.textContent = verbs[countVerb];
    storyParagraph.textContent = story;
}

function adjective_on_click() {
    countAdjective = randomIndex;
    chosenAdjective.textContent = adjectives[countAdjective];
    storyParagraph.textContent = story;
}

function noun2_on_click() {
    countNoun2 = randomIndex;
    chosenNoun2.textContent = nouns2[countNoun2];
    storyParagraph.textContent = story;
}

function setting_on_click() {
    countSetting = randomIndex;
    chosenSetting.textContent = settings[countSetting];
    storyParagraph.textContent = story;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
    storyParagraph.textContent = story;
    studentNumber.textContent = "Great Cocodia | 200555844";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    chosenNoun1.textContent = getRandomElement(nouns1);
    chosenVerb.textContent = getRandomElement(verbs);
    chosenAdjective.textContent = getRandomElement(adjectives);
    chosenNoun2.textContent = getRandomElement(nouns2);
    chosenSetting.textContent = getRandomElement(settings);
    story = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
    storyParagraph.textContent = story;
    
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function resetStory() {
    chosenNoun1.textContent = "";
    chosenVerb.textContent = "";
    chosenAdjective.textContent = "";
    chosenNoun2.textContent = "";
    chosenSetting.textContent = "";
    storyParagraph.textContent = "";
}

/* Event Listeners
-------------------------------------------------- */

    


noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", resetStory);
});