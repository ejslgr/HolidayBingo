//array of possible card contents
const entryArray = [
    "Free Space: people falling in love",
    "\"You'll always have them in here\" [points to heart]",
    "Benefit for the poor and/or orphans",
    "A kid figuring out the truth first",
    "A woman putting her career before love", 
    "A notoriously stern person getting into the holiday spirit", 
    "Mention of another movie in the Holiday-verse",
    "Dead parent(s)", 
    "\"Stop!\" / \"Wait!\" / \"Don't!\"",
    "Impending financial or political disaster",
    "A Christmas Day/Eve deadline",
    "A mysterious wise man (maybe Santa, maybe an angel)",
    "Dad figure saying \"I always thought you two would end up together\"",
    "\"One year later\"",
    "Black policeman or security figure",
    "Exaggerated ineptitude", 
    "Children worried about Santa", 
    "One of the leads being 'an artist'",
    "An interrupted kiss", 
    "A conflict turns into romantic repartee", 
    "A family member privately shares a lead's tragic or misunderstood backstory", 
    "Man naming honesty as an attractive quality in a woman who is lying to him", 
    "Nosy mother figure", 
    "Someone making a wish that they have to keep secret", 
    "The town mayor", 
    "Memory montage", 
    "Effeminate man as comic relief",
    "Traditional family holiday drink absolutely slaps",
    "Child asking an overly obvious question for the sake of exposition",
    "An animal figuring out the truth first",
    "People pretending to be in a relationship when they aren't (yet)",
    "Someone having to work on the holiday",
    "A holiday-themed competition",
    "Musical number or caroling scene",
    "Running into a high school ex",
    ""
]

//function that turns bingo squares red (and back) when clicked
const card = document.getElementById("card");
card.onclick = function turnRed(e){
    let targetDiv = e.target; 
    let bColor = window.getComputedStyle(targetDiv).backgroundColor;
    if (bColor === 'rgb(240, 248, 255)'){
        e.target.style.backgroundColor = 'red'
    }
    else if (e.target.style.backgroundColor === 'red'){
        e.target.style.background = 'aliceblue'
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
    child.style.backgroundColor = "aliceblue";
    var freeSpace = document.getElementById("freeSpace");
        freeSpace.innerHTML = entryArray[0];
        freeSpace.style.backgroundColor = "red"
    }  
}
const btn = document.getElementById("genCard");
btn.onclick = loadCard;
window.onload = loadCard
