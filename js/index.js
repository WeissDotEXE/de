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
    opacity:1,
    direction:'normal',
    duration:900,
    easing:'easeInOutSine',
    delay:7500
});

const darkModeBtn=document.querySelector('#darkModeBtn');

darkModeBtn.addEventListener('click',function(){ // function for dark/day mode

});

// class for client informations
class Client{
    constructor(firstName,lastName,email,yearOfBirth){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.yearOfBirth=yearOfBirth;
    }
    calcAge(){
        return 2021-this.yearOfBirth;
    }
    fullName(){
        return this.firstName+' '+this.lastName;
    }
}

client= new Client();