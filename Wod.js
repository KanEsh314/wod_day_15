function sequential(s)
{
  count = 0;
 for(var i = 0; i < s.length; i++)
   { 
     var j = i+1; 
     
     if(s[i] == 'S' && s[j] == 'S')
     {
       count++;
     }
   }
  document.write(count);
}
sequential("SOSSOT");