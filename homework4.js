//4
const findMinMax = function(Array, argument){
  var index = 0
  var largest = Array[0]
 if (argument === true){
    while(index < Array.length){
	  if (Array[index]>largest)
	  largest = Array[index]
	  index =index +1
	};
return largest
}
  
 if (argument === false) {
    var smallest = Array[0]
    while (index < Array.length){
	  if (Array[index] < smallest)
	  smallest = Array[index]
	  index = index +1
	};
return smallest
};

};  
 
 
 //3
 
 const ConcatAr = function(InputAr){
     var index = 0
	 var newAr = []
	 while (index < InputAr.length){
	    newAr = newAr.concat(InputAr[index])
		index = index + 1 }
	 return newAr };


	 
	 
	 

//6
const sum = function(Array){
    var runningSum = 0
	var index = 0
	while ( index < Array.length){
	  runningSum = runningSum + Array[index]
	  index = index + 1}
	return runningSum};
	
//5

f = function (a){
return 2*a};
const forEach = function(Array, f){
     var element = 0;
     while (element<Array.length){
	    f(Array[element])
		element= element + 1
		}
	 return f(Array[element]);
};


	
	
//7
const reverse = function (string){
    var emptyString = ''
	var index = string.length-1
	while (index >= 0){
	    emptyString = emptyString + string[index];
		index = index -1}
	 return emptyString;
};
  
	
	
//2

const nothing = function(m){
 if( m===0)
        {return ""}else
	    {return " " + nothing(m-1)};
};
const asteriks = function(n){
    if(n ===0)
	     {return ""}else
		 {return "*" + asteriks(n-1)};
};
const main = function (m,n,k){
    if(k ===0)
	    {return ""}else
	    {console.log (nothing(m) + asteriks(n))
	     main(m+1,n-2,k-1)};
};
const triangleStars = function (k){
    main(0,2*k-1,k);
};



//8
const checkerBoard = function(n){
const Black = "*";
const White = " ";
let Row = "";
let startingRow = 0;
while (startingRow <n)
    {Row = Row + Black + White;
	startingRow = startingRow +1};
let columnNumber = 0;
    while(columnNumber<n)
	{if(columnNumber%2===0)
	    {console.log (reverse(Row))}
	else {console.log (Row)}
	columnNumber= columnNumber +1;
	};
};


	
		
	 
	 
	
 
 
 