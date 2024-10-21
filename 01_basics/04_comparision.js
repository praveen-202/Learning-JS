// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2<1);

//in Js {>,<,>=,<=,...}{==}{===} these all work differently

// console.log(null>0);//false
// console.log(null==0);//false - 
// console.log(null>=0);//true - while comparinig except with ==, null converted into 0 first,that is why it's return true

// console.log(undefined==0);//false
// console.log(undefined>=0);//false
// console.log(undefined<0);//false

//strictly check-------

console.log("2"===2); //it check the datatype 


//we avoid to use these conversion to achive clean code 