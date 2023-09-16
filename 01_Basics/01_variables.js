const accountId =14453;
let accountEmail="abc@example.com";
var accountPassword="123456";
accountCity="Lahore"; // This is not a good method to declare a variable
let accountState; // this is an undefined

// accountId=789; const //could not be reasigned
console.log(accountId);

// viewing in a tabular form
console.table([accountId,accountEmail,accountPassword,accountCity]);

/* prefer not to use var
because of issue in block scope and functional scope
*/