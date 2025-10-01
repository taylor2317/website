// X-axis labels (1–5, plus Lost instead of 6)
const labels = ["1","2","3","4","5","Lost"];

// Function to load dataset strictly from localStorage
function loadData(wordLength) {
    return labels.map((_, idx) => {
    const key = `${wordLength}-${idx+1}`;
    const val = localStorage.getItem(key);
    return val !== null ? parseInt(val, 10) : 0; // only use stored value, else 0
    });
}

// Prepare datasets
const data = {
    labels: labels,
    datasets: [
    {
        label: "4-letter",
        data: loadData(4),
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.3)",
        fill: false,
        tension: 0
    },
    {
        label: "5-letter",
        data: loadData(5),
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.3)",
        fill: false,
        tension: 0
    },
    {
        label: "6-letter",
        data: loadData(6),
        borderColor: "green",
        backgroundColor: "rgba(0,255,0,0.3)",
        fill: false,
        tension: 0
    }
    ]
};

// Chart config
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
          color: "#000",
          font: {
            size: 20,
            weight: "bold"
          }
        },
        grid: {
          color: "#00000055",
        },
        ticks: {
            callback: function(value) {
                return Number.isInteger(value) ? value : null; // show only integers
            },
          color: "#000000",
          font: {
            size: 20,
            weight: "bold",
          }
        }
      },
      x: {
        title: {
          display: true,
          text: "Attempts Needed",
          color: "#000",
          font: {
            size: 20,
            weight: "bold",
          }
        },
        grid: {
          color: "#00000055",
        },
        ticks: {
          color: "#000000",
          font: {
            size: 20,
            weight: "bold",
          }
        }
      }
    },
    plugins: {   // ✅ moved inside options
      legend: {
        position: "top",
        labels: {
          color: "#000",
          font: {
            size: 20,
            weight: "bold"
          },
          boxWidth: 20,
          boxHeight: 12,
          padding: 15
        }
      }
    }
  }
};

// Build chart
new Chart(document.getElementById("attemptsChart"), config);

// Debug log so you can confirm what was read from localStorage
console.table({
    "4-letter": loadData(4),
    "5-letter": loadData(5),
    "6-letter": loadData(6)
});