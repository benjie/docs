// Needed as a workaround for https://answers.netlify.com/t/trailing-slash-missing-on-proxied-netlify-site/36367
;(function () {
  console.log(location.pathname)
  if (location.pathname === '/docs') {
    window.location = location.href + '/welcome'
  } else if (location.pathname === '/docs/') {
    window.location = location.href + 'welcome'
  }
})()
