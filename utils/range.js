/*
rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
rangeRight(0); // => []
*/

function rangeRight(start, end, step) {
		return range(start, end, step, true);
}

function range(start, end, step, isRight) {
		if(start !== undefined && end === undefined && step === undefined){
		end = start;
		start = null;
		step = null;
	}
    
    if(start === undefined) start = null;
    if(end === undefined) end = null;
    if(step === undefined) step = null;
    if(isRight === undefined) isRight = false;
					
	let ss = start == null ? 0 : start;
	let ee = end == null ? 0 : end;
	let st = step == null ? 1 : step;
	
  [ss, ee, st] = xch(ss, ee, st);
  let isReverse = XOR((ss < 0), isRight);
  let result = [];
  
  if(st === 0){
  	while(ss < ee){
		result.push(ss);
		ee -= 1;
    }
  }
  else{
    while(ss < ee){
      result.push(ss);
      ss += st;
    }
  }
	return (isReverse) ?  result.reverse() : result;
}

function xch(ss, ee, st){
  if(ss > ee){
   if(st < 0) st = st * -1;
   return [ee + 1, ss + 1, st];
   }
  else{
   return [ss, ee, st];
   }
}

function XOR(a,b) {
  return ( a || b ) && !( a && b );
}