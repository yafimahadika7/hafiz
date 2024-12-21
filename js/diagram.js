 // Data awal
 const data2023 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
 const data2024 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];
 const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
 const reset = document.getElementById("reset");


 // Konfigurasi awal chart
 const ctx = document.getElementById('salesChart').getContext('2d');
 let chart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: months, // Sumbu X menampilkan semua bulan
         datasets: [
             {
                 label: '2023',
                 data: data2023, // Data default (2023)
                 backgroundColor: 'rgba( 25, 25, 112, 1)',
                 borderColor: 'rgba( 25, 25, 112, 1)',
                 borderWidth: 1
             },
             {
                 label: '2024',
                 data: data2024, // Data default (2024)
                 backgroundColor: 'rgba(255, 140, 0, 1)',
                 borderColor: 'rgba(255, 140, 0, 1)',
                 borderWidth: 1
             }
         ]
     },
     options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
             },
             title: {
                 display: true,
                 text: 'Laporan Penjualan'
             }
         },
         scales: {
             y: {
                 beginAtZero: true,
                 min: 0,
                 max: 10000,
                 ticks: {
                     stepSize: 2500
                 }
             },

         }
     }
 });

 // Fungsi untuk mengupdate chart saat bulan diklik
 function updateChart(monthIndex) {
     // Hanya tampilkan batang untuk bulan tertentu

     chart.data.labels = [months[monthIndex]]; // Sumbu X hanya bulan yang dipilih
     chart.data.datasets[0].data = [data2022[monthIndex]]; // Data 2022 untuk bulan tersebut
     chart.data.datasets[1].data = [data2023[monthIndex]]; // Data 2023 untuk bulan tersebut
     chart.update(); // Render ulang chart
 }
 function resetChart() {
     // Hanya tampilkan batang untuk bulan tertentu
     chart.data.labels = months; // Sumbu X hanya bulan yang dipilih
     chart.data.datasets[0].data = data2022; // Data 2022 untuk bulan tersebut
     chart.data.datasets[1].data = data2023; // Data 2023 untuk bulan tersebut
     chart.update(); // Render ulang chart
 }
 reset.addEventListener("click", function () {
     resetChart();
 })