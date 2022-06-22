/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  let ctr = 0
  while(ctr < students.length){
  console.log(ctr + 1);
  console.log(students[ctr]);
  ctr++;
  }


  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code
  
  console.log(grades.reverse());

  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
  }
  

  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code
  
for (let i = 0; i < positiveNumbers.length; i++){
  if (positiveNumbers[i] % 2 === 0){
    console.log(positiveNumbers[i]);
  }
}


  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  for (let i = 0; i < mixedSignNumbers.length; i++){
    if (mixedSignNumbers[i] % 2 === 0){
      console.log(mixedSignNumbers[i]);
    }
  }

  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code

  console.log(symmetricalCapitals);
  for (let i = 2; i < symmetricalCapitals.length-1; i++){
    console.log(symmetricalCapitals[i]);
  }
  

  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  

console.log(fibonacciNumbers);
fibonacciNumbers.unshift(0);
fibonacciNumbers.push(21);
fibonacciNumbers.push(34);
for (let i = 0; i < fibonacciNumbers.length; i++){
  // console.log(fibonacciNumbers.unshift("0"));
  console.log(fibonacciNumbers[i]);
}
  

  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  const newArray = [1, 2, 3, 4, 5];
  // Challenge 7 Code

console.log(newArray);
for (let i = 0; i < newArray.length; i++){
  console.log(newArray[i]);
}


  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code

  emptyArray.unshift(1);
  emptyArray.unshift(0);
  emptyArray.push(2);
  emptyArray.push(3);
  emptyArray.push(4);

  console.log(emptyArray);
 
  for (let i = 0; i < emptyArray.length; i++){
    console.log(emptyArray[i]);
  }





  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code

  const students1 = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  let ctr1 = 3
  while(ctr1 < students1.length-2){
  console.log(ctr1 + 0);
  console.log(students1[ctr1]);
  ctr1++;
  }

  
  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

//   const students2 = [
//     'Tre',
//     'Sonny',
//     'Crystal',
//     'Ilyas',
//     'Greg',
//     'Fernando',
//     'Timothy',
//     'Patrick',
//     'Steve',
//     'Jimothy',
//     'Pat',
//     'Arnold',
//     'Andy'
//   ];

//  let students3 = students2;
// let ctr2 = 3
// while(ctr2 < students2.length-2){
// console.log(ctr2 + 0);
// console.log(students2[ctr2]);
// ctr2++;
// }



  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  
  const students4 = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  students4.slice(3, 11)
  for (let i = 3; i < students4.length-2; i++) {
    console.log(students4[i])
  }
  
  
  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

  dinosaurs.splice(4, 3);
  for (let i = 0; i < dinosaurs.length; i++) {
    console.log(dinosaurs[i])
  }

  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

  console.log(dinosaurs.join("*"));
  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

  console.log(dinosaurs.reverse());

  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

  const arr1 = ["Dog", "Cat"];
  const arr2 = ["Bird"];
  const arr3 = arr1.concat(arr2);

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);

  for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
  }

  
