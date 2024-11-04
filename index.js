function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};
  for( let number of array){
    const difference = target - number;
    if(seenNumbers[difference]){
      return true;
    }
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
  Space complexity: O(n)
                        -The function iterates through the array once, performing constant time operations for each element.
                       -The space complexity is O(n), where n is the length of the input array, due to the seenNumbers object.
*/

/* 
  Add your pseudocode here
  -create an empty object to store seen numbers.
  -Loop through each number in the array.
  -For each number:
                     -calculate the differnce between the target and the current number.
                     -Check if the difference already exist in the object
                     -if it exist return true
                     -if not add the current number to the object as a key with a value of true
  If no pair is found at the end, return false.                   
*/

/*
  Add written explanation of your solution here
  -The function uses an object to store seen numbers and their complements.
  -It iterates through the array once, checking if the complement of the current number exists in the object.
  -If a complement is found, it means the current number and its complement sum up to the target, so it returns true.
  -If no complement is found after iterating through the entire array, it means no pair sums up to the target, so it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 4, 2], 12));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 4, 2], 6));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 4, 2], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 4, 2], 3));


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
