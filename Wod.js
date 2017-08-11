function sequential(s)
{
  var sos = 'SOS'
  count = 0;
 for(var i = 0; i < s.length; i++)
   {    
     var seq = s.charAt(i);
     if(s.charAt(i) != sos.charAt(i%3))
     {
       count++;
     }
   }
  document.write(count);
}
sequential("SOSSOTSPTSOSSOPPOS");