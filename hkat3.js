document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('response').innerHTML = "Love to hear that! Lucky for you this is a two part series. Go check your email, there is going to be a password protected file.The password is (where we went on our first date followed by the year.)";
});

document.getElementById('noBtn').addEventListener('click', function() {
  document.getElementById('response').innerHTML = "Now this is awkward";
});
