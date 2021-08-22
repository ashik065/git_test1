///Q.1
///Finding the largest number

var sampleNumber = [-5.-2,-6,-1,0]

let max = sampleNumber[0];

for( var i=1; i<5; i++)
{
    temp = sampleNumber[i];

    if(temp > max)
    {
        max = temp ;
    }
   

}

console.log("The largest number is "+max);


///Q.2

for( var i=1; i <=100; i++)
{
    if(i%15==0)
    {
        console.log("AmiTumi");
        
    }
    else if(i%3==0)
    {
        console.log("Ami");
    }
    else if(i%5==0)
    {
        console.log("Tumi");
    }
    else
    console.log(i);

}

///Q.3
///Adding and Deleting from the start of the array


var aam = ["Gopalvog","Fajli","Khershapat","harivanga","Amrupali","Rani","Himshagor"];

console.log(aam);
aam.reverse();
aam.pop();
aam.reverse();
console.log(aam);
aam.reverse();
aam.push("Lengra");
aam.reverse();
console.log(aam);


///Q.4


var myColor = ["Red", "Green", "White", "Black"];
var sampleArray = '';

///adding with ','

for( var i=0; i<myColor.length; i++)
{
    if(i==myColor.length-1)
    {

        sampleArray += myColor[i] + '';
    }
    else
    {
        sampleArray += myColor[i] + ',';
    }   

}
console.log(sampleArray);

///adding with '+'

var sampleArray2 = '';

for( var i=0; i<myColor.length; i++)
{
    if(i==myColor.length-1)
    {

        sampleArray2 += myColor[i] + '';
    }
    else
    {
        sampleArray2 += myColor[i] + '+';
    }   

}
console.log(sampleArray2);


///Q.5

var output = '';
for(var i=0; i<5; i++)
{
    for(var j=0; j<=i; j++)
    {
        output += "* ";
    }
    console.log(output);
    output = '';
}


///Q.6

function firstNonRepeatChar(sampleArgument)
{
//var sampleArgument = 'abacddbec';
var str2Array = sampleArgument.split('');
var count = 0;
var result = '';

for(var i=0; i<str2Array.length; i++)
{
    count = 0;
    for(var j=0; j<str2Array.length; j++)
    {
        if(str2Array[i]==str2Array[j])
        {
            count += 1;
        }
    }
    if(count==1)
    {
        result = str2Array[i];
        break;
    }
}
console.log(result);
}

firstNonRepeatChar( 'abacddbec');