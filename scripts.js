//array of possible card contents
const entryArray = [
    "Free Space: people falling in love",
    "Benefit for the poor and/or orphans",
    "A child or a dog figures out the truth first",
    "A lead puts their career before love",
    "Notoriously stern person gets into the holiday spirit",
    "Mention of another movie in the Holiday-verse",
    "Dead parent(s)",
    "One lead begs the other not to leave",
    "Impending financial or political disaster",
    "Christmas Day/Eve deadline",
    "Mysterious wise man (maybe Santa, maybe an angel)",
    "\"One year later\"",
    "Exaggerated ineptitude, maybe involving a Christmas tree",
    "Children worried about Santa",
    "One of the leads is 'an artist'",
    "Interrupted kiss",
    "Conflict turns into romantic repartee",
    "Family member privately shares a lead's tragic or misunderstood backstory",
    "Meddling mother-figure",
    "Someone makes a wish that they have to keep secret",
    "The town mayor (or the HOA president)",
    "A montage or a series of flashbacks to remind us of ~time passing~",
    "Traditional holiday drink absolutely slaps",
    "Child asks an overly obvious question for the sake of exposition",
    "People pretend to be in a relationship when they aren't (yet)",
    "Someone has to work on the holiday",
    "Holiday-themed competition",
    "Musical number or caroling scene",
    "Running into an old flame",
    "Cozy country inn",
    "Someone returning home",
    "Quaint small town",
    "Christmas light fiasco",
    "Someone \"not ready to date again\" is lonely at Christmas",
    "Unseasonal foliage, covered in snow",

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
