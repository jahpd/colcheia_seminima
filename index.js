
/**
 * @name colcheia_seminima
 * @author jahpd
 */

var tau = 2 * Math.PI;

function sin(t, f, a, callback){
  var s = Math.sin(f * t * tau);
  if(callback){
    return callback(s);
  }
  else{
    return s;
  }
}



export function dsp(t) {
  return  sin(t, 1, 1, function(sample){
    return t >> sample << t;
  });
}
