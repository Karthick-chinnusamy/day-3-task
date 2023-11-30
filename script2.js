//question Node;3
var request= new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        var countryName= result[i].name.common;
        var population=result[i].population;
        var region=result[i].region;
        var subregion=result[i].subregion;
        var flags=result[i].flags;
        console.log("countryName:"+countryName);
        console.log("region:"+region);
        console.log("subregion"+subregion);
        console.log("population"+population);
        console.log("flags"+flags);
}

    }
    