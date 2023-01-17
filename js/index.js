console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Skylar";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Cody";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

  if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names ${hacker1.length && hacker2.length} characters!`)
}

// Iteration 3: Loops

let upperNameOfTheDriver = "";

for (let i = 0; i < hacker1.length; i++){
    upperNameOfTheDriver += hacker1[i] + " ";
}
console.log(upperNameOfTheDriver.toUpperCase()); 

let reverseHacker2 = "";

for (let p = hacker2.length -1; p >= 0; p--){
    reverseHacker2 += hacker2[p]
}
console.log(reverseHacker2); 

if (hacker1 < hacker2){
    console.log("The driver's name goes first");
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely")
} else if (hacker1 === hacker2){
    console.log("What?! You both have the same name?")
}


// BONUS

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida ut magna eu ornare. Aenean eget fermentum mauris. Nunc tristique eget lacus ac viverra. Morbi nec nisl risus. Aliquam auctor eget enim sit amet convallis. Curabitur eget ipsum sagittis magna laoreet iaculis sed eget diam. Morbi tempus bibendum rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc cursus maximus lectus. Aenean volutpat magna a turpis finibus scelerisque. Nullam et nibh id sapien fermentum ullamcorper. Nunc sapien sem, iaculis vitae hendrerit ut, mollis tempor eros. Donec eu velit vitae nisi lobortis auctor ut sed leo. Vivamus gravida venenatis leo, ut sollicitudin magna vestibulum sed. " +
"Integer gravida egestas dolor viverra congue. Nullam euismod, neque sed eleifend ullamcorper, libero justo auctor justo, eu porta enim urna sit amet urna. Aenean eget nunc quis est tincidunt eleifend in vitae eros. Nullam malesuada diam sit amet leo tincidunt, vitae maximus augue semper. Etiam feugiat vel mauris non pharetra. Duis ornare fringilla leo, nec sodales mi venenatis a. Nam ultricies ultricies hendrerit. Vivamus aliquet erat enim, nec tincidunt libero aliquam eget. Praesent pellentesque maximus ante, et congue massa dignissim nec. Vestibulum maximus ut augue eu aliquam. Donec eu condimentum enim. Nullam tempus pharetra ligula. Vestibulum tempus risus ac enim auctor, eget tristique dolor dapibus. " +
"Nullam turpis augue, consequat sit amet sem lacinia, auctor scelerisque est. Nulla faucibus quam vitae sapien varius, vitae fringilla sapien rutrum. Proin imperdiet, arcu id consectetur feugiat, est arcu gravida nibh, in venenatis nisl est ut dui. Vestibulum tellus diam, ultrices quis dapibus auctor, auctor id turpis. Vivamus quis urna eu lacus ullamcorper hendrerit eu in purus. Fusce venenatis ante eget libero fringilla tincidunt. Maecenas libero leo, fringilla eu urna quis, blandit hendrerit magna. Morbi pharetra lectus eu tortor placerat commodo. Etiam in facilisis enim."


//esto era para contar las letras sin los espacios -.-
/*let emptySpace = 0;
for (let u = 0; u < longText.length; u++){
    if(longText[u] !== " "){
        emptySpace++;
    }
}
console.log(emptySpace); */ 



let count = 0;
let justWords = false;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "," || longText[i] === ".") {
    justWords = false;
  } else if (justWords === false){
    count++;
    justWords = true
  }
}
console.log(count);


