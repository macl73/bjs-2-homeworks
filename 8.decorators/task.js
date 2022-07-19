function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache !== undefined) {
        console.log("Из кэша: " + objectInCache.result);
        return "Из кэша: " + objectInCache.result;
    };

    let result = func(...args);
    cache.push({hash: hash, result: result});
    if (cache.length > 5) {
      cache.shift();
    };
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
};
return wrapper;
};


const debounceDecoratorNew = (func, ms) => {
  let timerId = null;
  let firstTimerId = false;
  return function (...args) {
    clearTimeout(timerId);
    if (!firstTimerId) {
      firstTimerId = setTimeout(() => {
        func.apply(this, args);
        //console.timeEnd("time1");
      }, 0);
    };
    if (firstTimerId) {
      timerId = setTimeout(() => {
        func.apply(this, args);
        //console.timeEnd("time2");
        //console.timeEnd("time3");
      }, ms);
    };
  };  
};

//console.time("time1");
//console.time("time2");
//setTimeout(() => console.time("time3"), 4500);

function debounceDecorator2(func, ms) {
  let timerId = null;
  let firstTimerId = false;
  let count = 0;
  return function (...args) {
    clearTimeout(timerId);
    if (!firstTimerId) {
      firstTimerId = setTimeout(() => {
        func.apply(this, args);
        count++;
        //console.log(count);
        //console.timeEnd("time1");
      }, 0);
    };
    if (firstTimerId) {
      timerId = setTimeout(() => {
        func.apply(this, args);
        count++;
        //console.log(count);
        //console.timeEnd("time2");
        //console.timeEnd("time3");
      }, ms);
    };
  };  
}
