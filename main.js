// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below: //


/* validateCred() should return true when an array contains digits of a valid credit card number and false when it is invalid (Use Luhn algorithm method to check card validity).*/

function validateCard(arr) {
  let lastArr = arr.pop();
  arr.reverse();
  
  let iTotal = 0
  for(i = 0; i < arr.length; i+=2) {
  let multiply = arr[i] * 2;
  let newNum = multiply > 9 ? multiply - 9 :  multiply
  iTotal = iTotal + newNum;
  }
  // console.log(iTotal) //

  let jTotal = 0;
  for(j = 1; j < arr.length; j+=2){
  jTotal = jTotal + arr[j] 
  }
  // console.log(jTotal) //
 let totalArray = lastArr + iTotal + jTotal;
 // console.log(totalArray) //
 return totalArray % 10 === 0? true : false
  }

 // Test functions: //

/* console.log(validateCard(valid1)); */
// Should print true

/* console.log(validateCard(invalid1)); */
// Should print false //





/* findInvalidCards() should check through the nested array for which numbers are invalid, and return another nested array of those invalid cards. */

const validateNestedArr = [] 
const invalidArr = []

function findInvalidCards(nestedArr) {

 for(let i=0; i < nestedArr.length; i++) {
 validateNestedArr.push(validateCard(nestedArr[i]));
 }
 // console.log(validateNestedArr) //


const indexOfEvery = function(arr, val) {
return arr.reduce((acc, elem, idx) => (elem === val) ? [...acc, idx] : acc, [])
}

let invalidIndex = (indexOfEvery (validateNestedArr, false))

 // console.log(invalidIndex) //

for(let j = 0; j < invalidIndex.length; j++){
  invalidArr.push((nestedArr[invalidIndex[j]]))
}
    return invalidArr
} 

 // Test function //
/* console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); */
// Shouldn't print anything //

/* console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); */
// Should print all of the numbers //

/* console.log(findInvalidCards(batch)); */
// Test what the mystery numbers are //





/* idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array. */

 const companies = [] 

 function idInvalidCardCompanies(invalidCardsArr) {
 
  for(i=0; i < invalidCardsArr.length; i++) {

   if(invalidCardsArr[i][0] === 3) {
   if(companies.indexOf('Amex (American Express)') === -1) {
    companies.push(`Amex (American Express)`)
   }
   }

   else if(invalidCardsArr[i][0] === 4) {
   if(companies.indexOf('Visa') === -1) {
    companies.push('Visa')
   }
   }
  
   else if(invalidCardsArr[i][0] === 5) {
   if(companies.indexOf('MasterCard') === -1) {
    companies.push('MasterCard')
   }
   }

   else  if(invalidCardsArr[i][0] === 6) {
   if(companies.indexOf('Discover') === -1) {
    companies.push('Discover')
   }
   }

   else 
  
  companies.push('Company not found')
  }

  return companies
  
  } 

 // Test function //

/* console.log(idInvalidCardCompanies([invalid1])); */
// Should print['visa'] //

/* console.log(idInvalidCardCompanies([invalid2])); */
// Should print ['mastercard'] //









