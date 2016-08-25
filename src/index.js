var numbers=[];

function min(numbers) 
	{	
		if(Boolean(numbers)===false)
		return undefined;
		
    	var array=numbers.filter(function(number) 
		{
    		if(number===0)
			return true;
    		else if(typeof number==="number")
			return number;
     	});

		  
		var min_num=array[0];
		
        array.forEach(function(number)
	    {
			 if (min_num>number)
			min_num=number;
			
			
		});
		return min_num;
	}
	
	console.log(min([10,45,55,100,66,4,99]));
	console.log(min([10.5,45,55.2,100,66,99]));
	console.log(min([0,45,55.2,100,66,-1]));
	console.log(min([45,0,100,66,1]));
	console.log(min([10,45,,,66,4,99]));
	console.log(min([null,false,"4",undefined,true,99,524]));
	console.log(min([]));




function max(numbers) 
	{	
		if(Boolean(numbers)===false)
		return undefined;
		
    	var array=numbers.filter(function(number) 
		{
    		if(number===0)
			return true;
    		else if(typeof number==="number")
			return number;
     	});

		var max_num=array[0];
        array.forEach(function(number)
	    {
			if (max_num<number)
			max_num=number;
		});
		return max_num;
	}


		console.log(max([-45,0,-100,-66,-1]));
    	console.log(max([null,false,"4",undefined,true,99,6]));


function sum()
{		
		var total=0;
		for(var i=0;i<arguments.length;i++)
		{	if(typeof (arguments[i])!=="number")
			continue;
			total += arguments[i];

		}
		return total;

}
console.log(sum(10,45,55,100,66,4,99));
console.log(sum(null,false,"4",undefined,true,99,6));



