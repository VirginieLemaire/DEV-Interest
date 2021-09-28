const fetchOpengraph = require('fetch-opengraph');

(async () => {
  const data = await fetchOpengraph.fetch('https://github.com/purphoros/fetch-opengraph');
  console.log(data)
})()