const app = "I don't do much.";

const token = '9fd150a7d0fbba6004078aece5e28ee8fb92854f'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
