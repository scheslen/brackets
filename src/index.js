module.exports = function check(str, bracketsConfig) {
  let aBrackets=[];
  let l=0;
  let brOpen='';
  let brClose='';
  for (let i=0; i<str.length; i++){
    for (let k=0; k<bracketsConfig.length; k++){
        brOpen=bracketsConfig[k][0];
        brClose=bracketsConfig[k][1];
        if (brOpen === brClose &&  str[i]===brOpen ){
           if (aBrackets.len<1) { aBrackets[l++]=str[i]; }
           else if(aBrackets[l-1]===brOpen) {aBrackets=aBrackets.slice(0,-1);l--;}
                else {aBrackets[l++]=str[i];}
        }
        else {
          if (str[i]===brOpen){
              aBrackets[l++]=str[i];
          }
          if (str[i]===brClose){
              if (aBrackets.len<1) {return false; }
              if (aBrackets[l-1]===brOpen){
                  aBrackets=aBrackets.slice(0,-1);l--;
              }
              else {return false;  }
          }
        }
      }
  }
  if (aBrackets.length>0) {return false;}
  return true;

}
