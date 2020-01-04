users = [
    {
        first_name: "Robin W.",
        last_name: "Foster",
        email: "robin.foster@stud.uni-hannover.de",
        password: "ABC123"
    },
    {
        first_name: "Max",
        last_name: "Mustermann",
        email: "muster@r-foster.de",
        password: "ABC123"
    }
];

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
