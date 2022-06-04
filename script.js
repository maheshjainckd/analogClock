setInterval(() => {
d = new Date();
hr = d.getHours();
min = d.getMinutes();
sec = d.getSeconds();

// 12 => 360
// 1 => 360/12 = 30

// 60min = 30
// 1 min = 30/60 =1/2

hr_rotation = 30*hr + min/2;
min_rotation = 6*min;
sec_rotation = 6*sec;

// hour = document.getElementById(hour_hand);
// minute = document.getElementById(minute_hand);
// second = document.getElementById(second_hand);

hour_hand.style.transform = `rotate(${hr_rotation}deg)`
minute_hand.style.transform = `rotate(${min_rotation}deg)`
second_hand.style.transform = `rotate(${sec_rotation}deg)`

},1000);