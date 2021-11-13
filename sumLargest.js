const sumLargestNumbers = function(data)
{
     let greater = data[0];
     let secondgreater = data[1];

     if(greater > secondgreater) 
     {
        greater = data[0];
        secondgreater = data[1];
     } 
     else 
     {
        secondgreater = data[0];
        greater = data[1];
     }
	 
	 let i = 0;
     for(i = 2; i < data.length; i++)
     {
        if(data[i] > greater) 
        {
            secondgreater = greater;
            greater = data[i];
        }
    }
    return greater + secondgreater; 
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));