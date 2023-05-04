document.addEventListener('DOMContentLoaded', function() {
    let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let resetBtn = document.getElementById('reset');
  
    let min = 0;
    let sec = 0;
    let deci = 0;
    let timer = false;
  
    startBtn.addEventListener("click", function(){
        if (timer){
            return;
        }
        timer = true;
        stopWatch();
    });
  
    stopBtn.addEventListener("click", function(){
        timer = false;
    });
  
    resetBtn.addEventListener("click", function(){
        timer = false;
  
        // Reset values
        min = 0;
        sec = 0;
        deci = 0;
  
        document.getElementById('min').innerHTML = '00';
        document.getElementById('sec').innerHTML = '00';
        document.getElementById('deci').innerHTML = '00';
  
        document.getElementById('min').innerHTML = pad(min);
        document.getElementById('sec').innerHTML = pad(sec);
        document.getElementById('deci').innerHTML = pad(deci);
    });
  
    function stopWatch(){
        if (timer){
            deci += 1;
  
            if (deci == 60){
                sec += 1;
                deci = 0;
            }
  
            if (sec == 60){
                min += 1;
                sec = 0;
            }
  
            let minString = min;
            let secString = sec;
            let deciString = deci;
  
            if (min < 10) {
                minString = "0" + minString;
            }
  
            if (sec < 10) {
                secString = "0" + secString;
            }
  
            if (deci < 10) {
                deciString = "0" + deciString;
            }
            document.getElementById('min').innerHTML = minString;
            document.getElementById('sec').innerHTML = secString;
            document.getElementById('deci').innerHTML = deciString;
            setTimeout(stopWatch, 10);
        }
    }
  });
  