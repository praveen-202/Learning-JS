const accountId = 12345600
let accountEmail = "kumarpraveen8797@gmail.com"
var accountPassword = "123444"
accountCity  = "Bagalore"
let accountState

// accountId = 2 //not allowed - const datatype is constant type allowed one allocation

console.log(accountId);

accountEmail = "pka@gmai.com"
accountPassword = "212"
accountCity  = "Jaipur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
  
/*
  Prefer not to use var because of issue in block scope and functional scope
*/
