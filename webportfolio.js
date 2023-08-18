document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    
    
  });
  document.addEventListener('DOMContentLoaded', function () {
    const barCtx = document.getElementById('barChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');
  
    const barChart = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'c++'],
        datasets: [{
          label: 'Skill Level',
          data: [40, 30, 20, 60, 10],
          backgroundColor: 'rgba(209, 121, 134, 0.8)',
          borderColor: 'rgba(250, 0, 138, 0.11)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    const pieChart = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Work', 'Study', 'playgame', 'Sleep','Eatting'],
        datasets: [{
          data: [20, 25, 15, 30,10],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(203, 160, 248, 0.8)', 'rgba(77, 217, 82, 0.5)','rgba(248, 203, 160, 0.8)']
        }]
      }
    });
  });
  