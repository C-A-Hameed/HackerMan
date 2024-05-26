let a = [
    "Initializing the hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2...",
    "Connected successfully...",
    "Username Faraz...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match found...",
    "Accessing account.....",
    "Hack Successful......................."
  ]
  
  const sleep = (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(true) }, seconds * 1000)
    })
  }
  
  const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
  }
  
  (async () => {
    for (let i = 0; i < a.length; i++) {
      await showHack(a[i])
    }
  })()