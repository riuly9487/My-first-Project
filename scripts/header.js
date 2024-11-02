const interval = setInterval(function() {
  let todayTitle = dayjs().format('YYYY/MMM/DD');
  let todaySubtitle = dayjs().format('ddd HH:mm:ss');

  document.querySelector('.website-date-title').innerHTML = todayTitle;
  document.querySelector('.website-date-subtitle').innerHTML = todaySubtitle;

  console.log('time is running')
}, 1000);