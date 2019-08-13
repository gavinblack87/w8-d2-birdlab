const baseURL = 'http://localhost:3000/api/birds/'

export default {
  getBirds() {
    return fetch(baseURL)
    .then(res => res.json())
  },
  postBird(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())

  },

  deleteBird(id){
    return fetch(baseURL+id, {
      method: 'DELETE'
    })
  }

}
