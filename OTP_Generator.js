function otpGeneator(){
    var digits = '1234567890';
    let OTP ='';
    for (let i = 1; i <= 6; i++) {
       OTP = OTP+digits[Math.floor(Math.random()*10)];
        
    } 
    return OTP;
}
console.log(otpGeneator());
