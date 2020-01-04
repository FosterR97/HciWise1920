
/**
 * Fake Login Service
 * @param email
 * @param password
 * @returns boolean
 */
function doLogin(email, password){
    let i = 0;
    while(i < users.length){
        if(email === users[i].email && password === users[i].password){
            return true;
        }
        i++;
    }
    return false;
}
