const arr =[1 ,2 , 3, 4 ,5 ]
//^ real signature - input , output , format , behaviour

const ret = arr.forEach(function(value , index){
    console.log(`value at Index  ${index} is ${value}`);
});