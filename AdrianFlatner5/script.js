/* Part 2 */
console.log('PART 2')
var i;
for (i = 1; i < 21; i++) { 
    console.log(i);
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

var i;
for(i = 0; i < numbers.length; i++){
    if(numbers[i]%3 == 0 && numbers[i]%5 == 0){
        console.log("eplekake")
    }
    else if(numbers[i]%3 == 0){
        console.log("eple")
    }
    else if(numbers[i]%5 == 0){
        console.log("kake")
    }
    else{
        console.log(numbers[i])
    }
}

/* Part 4 */
const header = document.getElementsByTagName('h1');
header[0].innerText = 'Hello JavaScript';

/* Part 5 */
function changeDisplay () {
    document.getElementById("magic").style.display = "none";
}

function changeVisibility () {
    document.getElementById("magic").style.visibility = "hidden";
    document.getElementById("magic").style.display = "block";
}

function reset () {
    document.getElementById("magic").style.display = "block";
    document.getElementById("magic").style.visibility = "visible";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

const techs = document.getElementById('tech');

var i;
for(i=0; i < technologies.length; i++){
    var node = document.createElement('li');
    var textnode = document.createTextNode(technologies[i]); 
    node.appendChild(textnode);   
    techs.appendChild(node);
}

