import axios from 'axios'

let baseUrl = 'https://api.harvardartmuseums.org'
let apikey = '90f91620-7d8f-11ea-995a-efc19ec4eb40'

export default {
  getObjects(size, page) {
    return axios.get(baseUrl + '/object', {
      params: {
        apikey,
        size,
        page
      }
    })
  }
}
