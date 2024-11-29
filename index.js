function signup(username){
    var arr=["Anku","Nikki","Pratyush","Kaushal"];
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