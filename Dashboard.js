const ctx = document.getElementById('myChart').getContext('2d');

        // Predefined dataset for different dates
        const dataByDate = {
            '2024-10-01': [12, 19, 3, 5, 2, 23],
            '2024-10-02': [15, 13, 9, 11, 5, 8],
            '2024-10-03': [20, 12, 15, 7, 9, 14],
            '2024-10-04': [6, 10, 22, 17, 13, 18],
            '2024-10-05': [5, 7, 8, 9, 11, 12],
            '2024-10-06': [18, 14, 9, 3, 6, 8]
        };

        let currentChartData = dataByDate['2024-10-01']; // Default data for the initial date

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['16', '17', '18', '19', '20', '21'],
                datasets: [{
                    data: currentChartData,
                    borderColor: '#1D4ED8',
                    borderWidth: 2,
                    fill: false,
                    pointBackgroundColor: '#1D4ED8',
                    pointRadius: 3,
                    tension: 0.4
                }]
            },
            options: {
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false // Hide x-axis grid lines
                        },
                        ticks: {
                            color: '#0064F7' // Change x-axis labels color
                        }
                    },
                    y: {
                        display: false, // Hide y-axis
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // Function to update chart data based on selected date
        function updateChartData(date) {
            if (dataByDate[date]) {
                currentChartData = dataByDate[date];
            } else {
                alert('No data available for the selected date.');
                return;
            }

            myChart.data.datasets[0].data = currentChartData;
            myChart.update();
        }

        // Event listener for the button
        document.getElementById('updateChart').addEventListener('click', function() {
            const dateInput = document.getElementById('dateSelector').value;
            if (dateInput) {
                updateChartData(dateInput);
            } else {
                alert('Please select a date.');
            }
        });