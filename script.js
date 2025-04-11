document.addEventListener('DOMContentLoaded', function () {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // STEP 1: Check if 'count' cookie exists
  let count = getCookie('count');

  if (count) {
    // STEP 2: If exists, convert to number and increment
    count = parseInt(count) + 1;
  } else {
    // STEP 3: If not exists, initialize it to 1
    count = 1;
  }

  // STEP 4: Update cookie with new value
  setCookie('count', count, 7); // 7 days expiry

  // STEP 5: Display on webpage
  document.getElementById('countDisplay').innerText = `You have visited this page ${count} times.`;
});
