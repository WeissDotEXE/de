//animation for intro text
anime({
    targets: '#intro-greeting',
    translate:20,
    opacity:1,
    direction:'alternate',
    duration:2000,
    easing: 'easeInOutSine'
});
anime({
    targets:'#glad',
    opacity:1,
    direction:'alternate',
    duration:2000,
    easing:'easeInOutSine',
    delay:3500,
    duration:2000
});
anime({
    targets:'#intro-info',
    opacity:1,
    direction:'normal',
    duration: 1800,
    delay:6500,
    easing:'easeInOutSine'
});
anime({
    targets:['#createAccBtn','#guestBtn'],
    translateY:'20',
    opacity:1,
    direction:'normal',
    duration:1000,
    easing:'easeInOutSine',
    delay:7600
});
anime({
    targets:'#intro-video',
    opacity:1,
    duration:800,
    delay:7500,
    easing:'easeInOutSine'
});

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