const submitBtn=document.querySelector('#submitBtn');

//client object where I store data from submit button
let client={
    firstName:null,
    lastName:null,
    email:null
};
submitBtn.addEventListener('click',function(){
    client.firstName=document.querySelector('#clientfName').value;
    client.lastName=document.querySelector('#clientlName').value;
    client.email=document.querySelector('#clientEmail').value;
    sessionStorage.setItem("firstName",client.firstName);
    sessionStorage.setItem("lastName",client.lastName);
    sessionStorage.setItem("email",client.email);

    //declaring variables to get SAVED DATA from sessionStorage
    let firstNameData=sessionStorage.getItem('firstName');
    let lastNameData=sessionStorage.getItem('lastName');
    let emailData=sessionStorage.getItem('email');

    //changing variables for not being redirected to initial index.html/profile.html
    if(firstNameData!=="" && lastNameData!=="" && emailData!==""){
        sessionStorage.setItem("isCompleted",true);
        let isCompleted=sessionStorage.getItem('isCompleted');
        document.querySelector("#submitBtn").href="index.html"; 
    }
});