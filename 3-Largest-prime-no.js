function largestPrimeFactor(number) {
  // Good luck!
  var n=number
  var div=2, ans = 0, maxFact;
   while(n!=0) {
      if(n % div !=0)
         div = div + 1;
      else {
         maxFact = n;
         n = n / div;
         if(n == 1) {
            return (maxFact);
            ans = 1;
            break;
         }
      }
   }
}

largestPrimeFactor(13195);
