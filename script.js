function updateTime(){
    const date = new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    let dayOfTheWeek=date.getDay();
    //converting the number to get day like Tuesday
    if(dayOfTheWeek.toString()=="1"){
        dayOfTheWeek="Monday";
    }else if(dayOfTheWeek.toString()=="2"){
        dayOfTheWeek="Tuesday";
    }else if(dayOfTheWeek.toString()=="3"){
        dayOfTheWeek="Wednesday";
    }else if(dayOfTheWeek.toString()=="4"){
        dayOfTheWeek="Thursday";
    }else if(dayOfTheWeek.toString()=="5"){
        dayOfTheWeek="Friday";
    }else if(dayOfTheWeek.toString()=="6"){
        dayOfTheWeek="Saturday";
    }else if(dayOfTheWeek.toString()=="0"){
        dayOfTheWeek="Sunday";
    }
    const dayDate=date.getDate();//number on the calendar like 31st,22nd
    let month=date.getMonth();
    //convert month number to month name
    const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
    const year=date.getFullYear();
    document.getElementById("hours").innerText=hours+":"+minutes+":"+seconds;
    document.getElementById("date").innerText=dayOfTheWeek+","+dayDate+" "+monthNames[month]+" " +year;
}
 window.onload=function(){
     updateTime();
     setInterval(updateTime, 1000);
 }
