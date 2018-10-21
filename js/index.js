// A $( document ).ready() block.
$( document ).ready(function() {
  var restNum = parseInt(document.getElementById("restNum").innerHTML);
  var setNum = parseInt(document.getElementById("setNum").innerHTML);
  var minute = parseInt(document.getElementById("minute").innerHTML);
  var second = parseInt(document.getElementById("second").innerHTML);
  var timerOn = 0;
  var flag = 0;
  var v;
  $( "#restMore" ).click(function() {
    
    restNum += 1;
    document.getElementById("restNum").innerHTML = restNum;
    console.log(restNum);
  
  });
  
  $( "#restLess" ).click(function() {
    
    restNum -= 1;
    document.getElementById("restNum").innerHTML = restNum;

   });
  
  
  $( "#setMore" ).click(function() {
    
    setNum += 1;
    document.getElementById("setNum").innerHTML = setNum
    document.getElementById("minute").innerHTML = setNum;
    
  });
  
  
  $( "#setLess" ).click(function() {
    
    setNum -= 1;
    document.getElementById("setNum").innerHTML = setNum;
    document.getElementById("minute").innerHTML = setNum;
    
  });
  
  
  $( "#start" ).click(function() {
    
    if (!timerOn) {
        timerOn = 1;
        timer();

         }
    
  });
  
  
  $( "#stop" ).click(function() {
    
    clearInterval(v);
     timerOn = 0;   

  });
  
  $( "#reset" ).click(function() {
      clearInterval(v);
    timerOn = 0;
    second = 00;
    setNum = parseInt(document.getElementById("setNum").innerHTML);
    
    document.getElementById("minute").innerHTML = setNum;
    document.getElementById("second").innerHTML = "0" + second;
    
    
      

  });
  
  
  function alertFunc() {

    if ( second == 0 && setNum == 0)
      {
        if ( flag == 0 )
          {
          
            second = 59;
            setNum = restNum - 1;
            document.getElementById("minute").innerHTML = setNum;
            document.getElementById("second").innerHTML = second;
        
          }
        
        else if ( flag == 1)
          {
            
          }

      }
    
    if ( second == 0)
      {
        flag = 0;
        second = 59;
        setNum =  setNum - 1;
        console.log(setNum + ":" + second);
        document.getElementById("minute").innerHTML = setNum ;
        document.getElementById("second").innerHTML = second;
      }
    
    else if ( second != 0)
      {
      
      second--;
        
        if ( second < 10)
          {
            console.log(setNum  + ":" + "0" + second);
            document.getElementById("minute").innerHTML = setNum ;
            document.getElementById("second").innerHTML = "0" + second;
          }
        
        else 
          {
            console.log(setNum  + ":" + second);
            document.getElementById("minute").innerHTML = setNum ;
            document.getElementById("second").innerHTML = second;
          }
      
      }
    
    

  }
  
  function timer() {
    
     v = setInterval(alertFunc, 1000);
    
    
  }
  
    
});