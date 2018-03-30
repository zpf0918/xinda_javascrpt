function callback() {
  console.log('我跑完了');
}

function rub(cb) {
  console.log('🏃🏃🏃🏃🏃');
  cb();
}

rub(callback);
