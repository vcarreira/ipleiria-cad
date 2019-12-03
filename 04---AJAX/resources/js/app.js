function toggleLamp() {
  let icon = this.getElementsByTagName('i')[0] // e.target
  let device = this.closest('.element').querySelector('.device-icon')
  if (icon.classList.contains('fa-toggle-on')) {
    icon.classList.remove('fa-toggle-on')
    icon.classList.add('fa-toggle-off')
    device.classList.remove('fas')
    device.classList.add('far')
  } else {
    icon.classList.remove('fa-toggle-off')
    icon.classList.add('fa-toggle-on')
    device.classList.remove('far')
    device.classList.add('fas')
  }
  device.classList.toggle('device-on')
}

function toggleZone() {
  if (this.classList.contains('fa-window-close')) {
    this.classList.remove('fa-window-close')
    this.classList.add('fa-plus-square')
  } else {
    this.classList.remove('fa-plus-square')
    this.classList.add('fa-window-close')
  }
  document.getElementById(this.dataset.target).classList.toggle('collapsed')
}

function registerHandlers() {
  document.querySelectorAll('.lamp').forEach(node => node.addEventListener('click', toggleLamp))
  document.querySelectorAll('.toggle-zone').forEach(node => node.addEventListener('click', toggleZone))
}

function updateClock() {
  let now = new Date()
  let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
  document.getElementById('clockTime').textContent = time
  let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
  document.getElementById('clockDate').textContent = date
}

window.addEventListener('DOMContentLoaded', function() {
  registerHandlers()
  window.setInterval(updateClock, 1000)
  updateClock()
})

console.log('module app.js was loaded')
