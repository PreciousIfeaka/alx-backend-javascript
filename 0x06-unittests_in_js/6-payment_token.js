function getPaymentTokenFromAPI(success) {
  return new Promise((res, rej) => {
    if (success === true) {
      res({
        data: 'Successful response from the API'
      })
    }
  })
}

module.exports = getPaymentTokenFromAPI;