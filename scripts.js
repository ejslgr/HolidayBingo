//array of possible card contents
const entryArray = [
    "Free Space: people falling in love",
    "\"You'll always have them in here\" (points to heart)",
    "Benefit for the poor and/or orphans",
    "Kid figures out the truth first",
    "Dog figures out the truth first",
    "Woman puts her career before love", 
    "Notoriously stern person gets into the holiday spirit", 
    "Mention of another movie in the Holiday-verse",
    "Dead parent(s)", 
    "\"Stop!\" / \"Wait!\" / \"Don't!\"",
    "Impending financial or political disaster",
    "Christmas Day/Eve deadline",
    "Mysterious wise man (maybe Santa, maybe an angel)",
    "Father-figure says \"I always thought you two would end up together\"",
    "\"One year later\"",
    "Black policeman or security figure",
    "Exaggerated ineptitude", 
    "Children worried about Santa", 
    "One of the leads is 'an artist'",
    "Interrupted kiss", 
    "Conflict turns into romantic repartee", 
    "Family member privately shares a lead's tragic or misunderstood backstory", 
    "Love interest names honesty as an attractive quality to a person who is lying to them", 
    "Meddling mother-figure", 
    "Someone makes a wish that they have to keep secret", 
    "Town mayor", 
    "Memory montage", 
    "Effeminate man as comic relief",
    "Traditional holiday drink absolutely slaps",
    "Child asks an overly obvious question for the sake of exposition",
    "People pretend to be in a relationship when they aren't (yet)",
    "Someone has to work on the holiday",
    "Holiday-themed competition",
    "Musical number or caroling scene",
    "Running into an old flame",
    "Cozy country inn",
]

//function that turns bingo squares red (and back) when clicked
const card = document.getElementById("card");
card.onclick = function turnRed(e){
    let targetDiv = e.target; 
    let bColor = window.getComputedStyle(targetDiv).backgroundColor;
    if (bColor === 'rgb(231, 248, 248)'){
        e.target.style.backgroundColor = '#54CFCF';
    }
    else if (e.target.style.backgroundColor === 'rgb(84, 207, 207)'){
        e.target.style.background = '#E7F8F8'
    }
}

//function that generates a card when the button is clicked and when the page loads
const loadCard = function generateCard(){
    let entries = entryArray;
    var children = card.children;
    for (var i = 0; i < children.length; i++){
        var child = children[i];
        function shuffle(arr){
            for (var j = arr.length - 1; j > 0; j--){
                var k = Math.floor(Math.random() * (j + 1));
                var temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            }
        }     
    var copiedArray = entries.slice(1);
    shuffle(copiedArray);
    entries = copiedArray;
    child.innerHTML = entries[0];
    child.style.backgroundColor = "#E7F8F8";
    var freeSpace = document.getElementById("freeSpace");
        freeSpace.innerHTML = entryArray[0];
        freeSpace.style.backgroundColor = "#C30F16";
        freeSpace.style.color="#ffebcd"
    }  
}
const btn = document.getElementById("genCard");
btn.onclick = loadCard;
window.onload = loadCard
