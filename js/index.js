//script for checking if profile is already created(sessionStorage)
//for not showing the initial index.html(main-content class)
let isCompletedData=sessionStorage.getItem('isCompleted');
let firstNameData=sessionStorage.getItem('firstName');
let lastNameData=sessionStorage.getItem('lastName');
let emailData=sessionStorage.getItem('email');
if(isCompletedData==="true"){
    document.querySelector('.main-content').style.display="none";
    document.querySelector('.main-content1').style.display="block";
    document.querySelector('#customGreetingName').innerHTML ="Welcome, "+ firstNameData+' '+ lastNameData; 
}
