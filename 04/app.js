import User from './User.js';

class Admin extends User {
    constructor( {login = '', password = ''} ) {
        super( {login, password} )
        this.login = login;
        this.password = password;
    }

    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }

        return false;
    }
}

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user = new User( userData );
user.register();



const admin1 = new Admin( userData );
admin1.register(); // error

const admin2 = new Admin( adminData );
admin2.register(); // done