const cron = require('node-cron');
const fetchAndStorePlayerProps = require('./utils/fetchData');

// Schedule job to fetch and store player props once a day
cron.schedule('0 0 * * *', () => {
  console.log('Fetching and storing player props...');
  fetchAndStorePlayerProps();
});