// // string methods allow you to manipulate and work with text (strings)

// const email = "Bro1@gmail.com"

// let userName = email.slice(0, email.indexOf("@"))
// let extension = email.slice(email.indexOf("@") + 1)

// console.log(userName)
// console.log(extension)

let username = window.prompt("Enter your username:")

// NO METHOD CHAINING

username = username.trim()
let letter = username.charAt(0)
letter = letter.toUpperCase()

let extraChars = username.slice(1)
extraChars = extraChars.toLowerCase()
username = letter + extraChars

console.log(username)

// METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

console.log(username)