const axios = require('axios');

(async function() {
  const options = {
    method: 'POST',
    url: 'https://midjourney4.p.rapidapi.com/rapida/sets/fast',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'f18bcef7abmsh4297f59e456b6cep168d17jsnaeac4ed272fd',
      'X-RapidAPI-Host': 'midjourney4.p.rapidapi.com'
    },
    data: {
      prompt: 'cubic sphere'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})();
