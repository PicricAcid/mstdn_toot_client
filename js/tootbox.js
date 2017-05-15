
const token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

function toot_send() {
  const url = 'https://mstdn-workers.com/api/v1/statuses'
  let input　= document.getElementById('toottext')
  let tootinput = input.value

  let request = new XMLHttpRequest()
  request.open('POST', url, false)
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  request.send('status=' + tootinput + '&bearer_token=' + token)
  console.log(request.status)
  reset()
}

function user_status_get() {
  const url = 'https://mstdn-workers.com/api/v1/accounts/verify_credentials'
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.setRequestHeader('authorization', 'Bearer ' + token)
  request.send(null)
  text = JSON.parse(request.response)
  console.log(text)
  document.getElementById('avatar').innerHTML = "<div id='icon' style='width: 50px;height: 50px;-webkit-border-top-left-radius: 5px; -webkit-border-top-right-radius: 5px;-webkit-border-bottom-left-radius: 5px;-webkit-border-bottom-right-radius: 5px;background: url(" + text.avatar + ");background-size: 50px 50px;'></div>"
  document.getElementById('display_name').innerHTML = text.display_name
  document.getElementById('user_name').innerHTML = text.username
}

function reset(){
    var reset_target = document.getElementById("toottext")
    if(reset_target.value == ''){
        alert('Text has already reset')
    }else{
        reset_target.value = ''
    }
}

window.onload = () => {
  user_status_get()
}
