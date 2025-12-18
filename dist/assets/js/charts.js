$(
function(){



  var options = {
    chart: {
        type: 'area',
        height: 500 // adjust the height as needed
    },
    series: [{
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    colors: ['#ED3C58', '#19A38C', '#253C78'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    dataLabels: { enabled: false },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
  };

var chart = new ApexCharts(document.querySelector("#downloadAuditLogsChart"), options);

chart.render();


 var options = {
    chart: {
        type: 'bar',
        height: 500,
        toolbar: { show: false },
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 500,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    series: [{
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '30%',
            borderRadius: 5
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: ['#3F6E80'],
    xaxis: {
        categories: [
            "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
          ],
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        show: false
    },
    grid: {
        show: false
    }
};
var barchart = new ApexCharts(document.querySelector("#searchCountChart"), options);

barchart.render();


}
  



)