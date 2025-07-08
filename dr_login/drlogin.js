// Placeholder for video call functionality
document.querySelectorAll('.video-call-btn')?.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Video call feature coming soon!');
  });
});

// Graphs using Chart.js with red theme

// Blood Pressure Graph
new Chart(document.getElementById('bloodPressureGraph'), {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15'],
    datasets: [{
      label: 'Blood Pressure (mmHg)',
      data: [150, 145, 140, 135],
      borderColor: '#C0392B',
      backgroundColor: 'rgba(192, 57, 43, 0.2)',
      fill: true,
      tension: 0.3
    }]
  }
});

// Sleep Progress Graph
new Chart(document.getElementById('sleepGraph'), {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Sleep Hours',
      data: [6, 7, 5, 8, 7],
      backgroundColor: '#C0392B'
    }]
  }
});

// Stress Level Graph
new Chart(document.getElementById('stressGraph'), {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Stress Level',
      data: [70, 65, 60, 55],
      borderColor: '#C0392B',
      backgroundColor: 'rgba(192, 57, 43, 0.2)',
      fill: true,
      tension: 0.3
    }]
  }
});

// Heart Rate Graph
new Chart(document.getElementById('heartRateGraph'), {
  type: 'line',
  data: {
    labels: ['8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [{
      label: 'Heart Rate (bpm)',
      data: [72, 78, 75, 70],
      borderColor: '#C0392B',
      backgroundColor: 'rgba(192, 57, 43, 0.2)',
      fill: true,
      tension: 0.3
    }]
  }
});

// Modal logic
const modal = document.getElementById("graphModal");
const btn = document.getElementById("addGraphBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
}

