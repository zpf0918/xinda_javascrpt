//异步处理

function callback() {
  console.log('我终于被调用了');
}

setTimeout(callback, 5000);
