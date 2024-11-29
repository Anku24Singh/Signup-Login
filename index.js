function signup(username){
    let arr=["Anku","Nikki","Pratyush","Kaushal"];
    for(i=0;i<arr.length;i++){
        if(username==arr[i]){
            console.log("Already Registered, Please Login");
            break;
        }
        else{
            arr.push(username);
            console.log("Signup sucessful, please login");
            break;
        }
    }
}
signup("Anku");

function login(usernameInput,password){
    let username2=["Anku","Nicky","Shivangi"];
    for(i=0;i<username2.length;i++){
        if(usernameInput==username2[i] && password=="Emp@123"){
            console.log("Login SucessFull");
            break;
        }
        else if(usernameInput!=username2[i]){
            console.log("User Not Found, Please signup");
            break;
        }
        else if (password!="Emp@123"){
            console.log("Wrong Password");
            break;
        }
    }
}
login("Anku","Emp@12");