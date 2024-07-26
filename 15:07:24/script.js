document.getElementById('sendOtpBtn').addEventListener('click', function(e) {
    e.preventDefault();
  
    const form = document.getElementById('studentForm');
    const email = form.email_id.value;
    const user_name = form.user_name.value;
  
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * digits.length)];
    }
  
    const templateParams = {
      user_name: user_name,
      email_id: email,
      otp: OTP
    };
  
    emailjs.send('service_ed1k6bl', 'template_k757bf6', templateParams, 'sqg1qjThAMjO7VGSs')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('ans').innerText = 'OTP sent to your email!';
        localStorage.setItem('generatedOtp', OTP);
      }, function(error) {
        console.log('FAILED...', error.text);
        document.getElementById('ans').innerText = 'Failed to send OTP. Please try again.';
      });
  });
  
  document.getElementById('verifyOtpBtn').addEventListener('click', function(e) {
    e.preventDefault();
  
    const enteredOtp = document.getElementById('otpInput').value;
    const generatedOtp = localStorage.getItem('generatedOtp');
  
    if (enteredOtp === generatedOtp) {
      alert('OTP Verified Successfully!');
    } else {
      alert('Invalid OTP!');
    }
  });