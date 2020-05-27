function fiboEvenSum(n) {
  // You can do it!
  var t1 = 0, t2 = 1, nextTerm = 0,i=0,sum=0;
  var arr=new Array();
  var nextTerm = t1 + t2;
  while (nextTerm <= n) {
        arr.push(nextTerm);
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1 + t2;
    }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j]%2==0)
    {
      sum=sum+arr[j];
    }
  }
  return sum;
}

fiboEvenSum(10);
