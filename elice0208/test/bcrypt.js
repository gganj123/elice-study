const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'btsiloveyou'; // => asdFasdf!@3asdFAsdf
const someOtherPlaintextPassword = 'notMyPassword1234';

bcrypt.hash( myPlaintextPassword, saltRounds, function (err,hash){

})

bcrypt.compare(myPlaintextPassword,hash,function(err,result){
    
})