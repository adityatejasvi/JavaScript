const accountId=1053
var accountEmail= "adi@gmail.com"
let accountPassword="12345"
accountCity="Patna"
let accountState;

console.log(accountEmail)
// It is not allowed to change const value

// accountId=222 not allowed

accountEmail="baunu@gmail.com"
accountPassword="212121"
accountCity="Kolkata"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

// we can also use table to represent data
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])