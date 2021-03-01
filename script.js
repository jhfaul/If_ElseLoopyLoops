var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

var wrapper1 = document.body.querySelector(".wrapper1");
var wrapper2 = document.body.querySelector(".wrapper2");
var wrapper3 = document.body.querySelector(".wrapper3");
var wrapper4 = document.body.querySelector(".wrapper4");
var wrapper5 = document.body.querySelector(".wrapper5");
var wrapper6 = document.body.querySelector(".wrapper6");

animals[0] = "borf borf!";
animals[1] = "I am an animal";
animals[2] = "I am a cat";
animals[3] = "I am an animal";
animals[4] = "I am a cat";
animals[5] = "borf borf!";

for (i=0;i<animals.length;i++)
{
wrapper1.innerHTML = (animals[0])
}

for (i=1;i<animals.length;i++)
{
wrapper2.innerHTML = (animals[1])
}

for (i=2;i<animals.length;i++)
{
wrapper3.innerHTML = (animals[2])
}

for (i=3;i<animals.length;i++)
{
wrapper4.innerHTML = (animals[3])
}

for (i=4;i<animals.length;i++)
{
wrapper5.innerHTML = (animals[4])
}

for (i=5;i<animals.length;i++)
{
wrapper6.innerHTML = (animals[5])
}