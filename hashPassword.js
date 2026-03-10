import bcrypt from "bcrypt"
import { readFileSync, writeFileSync } from "fs";
const saltRounds = 10;
const myPlaintextPassword = process.argv[2] || 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


let data = '';
try {
    data = readFileSync('password.txt' , 'utf-8');
    data = data.trim(); 
} catch(error) {
    console.log(error.message);
}

if (!data) {
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        if (err) {
            console.error(err);
        } else {
            writeFileSync('password.txt', hash, 'utf-8');
            console.log('Password saved');
        }
    });
} else {
    bcrypt.compare(
        process.argv[2],
        data
).then((result) => {
    if (result) {
        console.log('Correct password');
    } else {
        console.log('Incorrect password');
    }
});
}
