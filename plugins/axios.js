export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log(config.method + " " + config.url)
  })

  $axios.onResponse(response => {
    console.log(response.statusText + " " + response.config.url)
    // console.log(response.data)
  })

  $axios.onResponseError(error => {
    console.log("status: " + error.response.status)
    console.log(error.response.data)
    alert(error.response.data.msg)
  })
}