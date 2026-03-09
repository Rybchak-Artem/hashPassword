import bcrypt from "bcrypt"
import { readFileSync } from "fs";
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     console.log(hash)
// });


bcrypt.compare(
    myPlaintextPassword,
    '$2b$10$RAjYluEYSLHGjoLQ5P0hZuIkf99zAzP0onlxbLB1MVtujsuUFewVC'
).then((data) => {
    console.log(data)
})

let data = '';
try {
    data = readFileSync('password.txt')
    data = data.trim();
} catch(error) {
    console.log(error.message);
}

console.log(data.toString())

if (!data) {
    // create hash and save to file
} else {
    // check if hash and password matches
}
