export default class Admin{
    
    class Admin extends User {

        isPasswordCorrect() {
            if(this.password.length >= 10) {
                return true;
            }
    
            return false;
        }
    }
}
