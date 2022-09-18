function timeUtil(callback, n) {
  //console.log(callback, n);

  var start = new Date();
  console.log('TEST :', callback(n));
  var end = new Date();

  console.log('TIME:', end - start);
}

export default timeUtil;
