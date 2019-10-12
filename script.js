const input = document.getElementById("myinput")
const title = document.getElementById("mytitle")
input.addEventListener('input', (e) => {
  title.innerHTML = e.target.value
})
