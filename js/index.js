// Iteration 1: Names and Input
/*
### Iteration 1: Names and Input

  1.1 Create a variable `hacker1` with the driver's name. <br>
  1.2 Print `"The driver's name is XXXX"`.<br>
  1.3 Create a variable `hacker2` with the navigator's name.<br>
  1.4 Print `"The navigator's name is YYYY"`.
*/
let hacker1 = 'driversName';
let hacker2 = 'navigatorsName';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// ------------------------------------
// Iteration 2: Conditionals
/*
### Iteration 2: Conditionals
  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
	  - `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`.
*/
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

/*Iteration 3: Loops
### Iteration 3: Loops
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`
  
  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
  
  */
console.log('--------- 3.1 upperstring ----------');
let upperString = '';
for (let i = 0; i < hacker1.length; i++) {
  upperString += hacker1[i];
  if (hacker1.length !== i + 1) {
    upperString += ' ';
  }
}
console.log(upperString);
// nome invertido
let nomeInvetido = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  nomeInvetido += hacker2[i];
}

console.log('--------- nome invertido ----------');
console.log(nomeInvetido);

//
console.log(' ----- ex 3.3 -------');
/*
3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`*/

hacker1 = 'driversName';
hacker2 = 'navigatorsName';
let sortido = [hacker1, hacker2].sort();
console.log(sortido);

if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
} else if (sortido[0] === hacker1) {
  console.log(`The driver's name goes first.`);
} else {
  console.log(`Yo, the navigator goes first definitely.`);
}

console.log('--------- bonus 1 ----------');
/*
#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
  */
// 50 palavras - 1 paragrafo

let paragrafo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis velit id aliquet pretium. Etiam sollicitudin quam et orci vulputate, efficitur pharetra augue sodales. Vivamus tincidunt velit eget nulla iaculis porta. Vestibulum id orci turpis. Phasellus viverra massa eget mi eleifend aliquam. Aliquam nisl velit, feugiat a gravida sed, posuere in ante. Integer mi diam, pharetra quis risus vel, venenatis venenatis leo. Donec luctus felis eget nunc imperdiet tempor. Curabitur vestibulum justo felis, a consequat ipsum sagittis sit amet. Mauris malesuada mauris augue, eget facilisis dolor efficitur vel.

In tempor sapien non mauris malesuada luctus at tristique est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sollicitudin varius neque, in dapibus lectus viverra eu. Praesent placerat suscipit pellentesque. Vestibulum dignissim libero ac tortor fermentum aliquet. Aliquam mauris purus, laoreet eu nulla at, vulputate faucibus lorem. Proin venenatis ipsum est, id aliquam mi dapibus ut. Maecenas sed lobortis urna, ut euismod lectus. Nulla facilisi. Aliquam eget mauris est. Aenean iaculis gravida tempus. Phasellus et sem tortor. Aliquam mattis viverra faucibus.


Vivamus purus enim, lacinia sit amet ante condimentum, facilisis efficitur nisl. Ut porta, leo ac aliquam dapibus, nulla diam malesuada eros, nec dapibus lectus orci a orci. Etiam vitae orci vitae odio tincidunt auctor. Nulla at tincidunt velit. Mauris fermentum neque vel ipsum pharetra, ac rhoncus nibh commodo. Morbi sollicitudin ex eget leo hendrerit, at molestie sapien dictum. Proin id molestie metus. In et malesuada erat. Vestibulum aliquam orci ut aliquam ultricies. Sed tincidunt suscipit mauris feugiat accumsan. Etiam gravida lacus arcu, quis ornare elit pharetra sit amet. Etiam eu metus diam.`;
//266 - informado na fonte

//paragrafo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget maximus ante, ut cursus ligula. Cras luctus sapien a dui convallis aliquet. Donec sollicitudin, risus a cursus porttitor, ante libero.`;
//30

let espaçosEntre = 0;
for (let index = 0; index < paragrafo.length; index++) {
  //não conta character '\n', evita \n repetido, não implementei o espaço repetido, pois nao tem (comparei com o word e o informado no site)
  if (
    paragrafo[index] === ' ' ||
    (paragrafo[index] == String.fromCharCode('0x0A') &&
      paragrafo[index - 1] != String.fromCharCode('0x0A'))
  ) {
    espaçosEntre++;
    //console.log(index, paragrafo[index]);
    //console.log(paragrafo[index]);
  }
}
console.log('palavras = ', espaçosEntre + 1);
console.log('não conta character - new line -, evita repetido tbm');

console.log(String.fromCharCode('0x0A'), '<--');
