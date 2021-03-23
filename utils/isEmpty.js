/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
*/

function isEmpty(value) {
		switch(value){
          case null:
          case true:
          case false:
          case 0:
          case 1:
          case '':
          case undefined:
          case []:
          case {}:
               return true;  
          default:
            if(typeof value == 'Number')
              return true;
            else 
              return false;
        }
}