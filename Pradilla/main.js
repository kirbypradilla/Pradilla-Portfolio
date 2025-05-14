function openModal(projectId) {
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const description = document.getElementById('modal-description');

  if (projectId === 'project1') {
    title.textContent = 'Smart Home Automation';
    description.textContent = 'Developed a system to control home appliances remotely using IoT technologies like Arduino and MQTT.';
  } else if (projectId === 'project2') {
    title.textContent = 'Gesture-Controlled Robot';
    description.textContent = 'Designed a robot that responds to hand gestures using sensors and microcontrollers.';
  }

  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};
