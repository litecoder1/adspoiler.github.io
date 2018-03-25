//Getting DOM elements
const openModalBtn = document.querySelector('#open-btn');
const closeModalBtn = document.querySelector('#close-btn');
const modalBlock = document.querySelector('#modal-block');



//Show Modal function
function showModal() {

    modalBlock.classList.toggle('active');

}


//Listeners
openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);

//JQuery scripts

//Init tabs
$(document).ready(function () {
    $(".modal-tabs").lightTabs();
});


//Init datatable
$(document).ready(function () {
    $('#table_id').DataTable({
        searching: false,
        paging: false,
        "columnDefs": [
            {
                "targets": [0, 2, 4, 9, 11], //first column / numbering column
                "orderable": false, //set not orderable 
            },
        ],
        "info": false
    });
});


//Init datatable
var scheduleColors = Highcharts.setOptions({
    colors: ['#C9414C', '#3399D9']
});


//Init highcharts
Highcharts.chart('schedule', {
    title: {
        text: false
    },
    chart: {
        backgroundColor: '#2a2a2a',
        type: 'area',
        height: '370px'
    },

    xAxis: {
        categories: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        lineColor: '#777777',
        tickColor: '#777777',
        tickWidth: 1,
        tickInterval: 2,
    },

    yAxis: {
        className: 'class',
        gridLineColor: '#777777',
        title: {
            text: false
        }
    },

    legend: {
        itemHoverStyle: {
            color: '#f2f2f2'
        },
        itemStyle: {
            color: '#ffffff'
        }
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        lineWidth: 0
                    }
                }
            }
        }
    },

    series: [
        {
            name: 'Пересечение',
            data: [409.9, 301.5, 206.4, 329.2, 344.0, 276.0, 235.6, 248.5, 316.4, 294.1, 15.6],
            fillOpacity: 0.4,
            color: '#C9414C',
            lineColor: '#C9414C',
            fillColor: {
                linearGradient: [0, 0, 0, 400],
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, 'rgba(2,0,0,0)']
                ]
            }
        },
        {
            name: 'AdSpoiler',
            data: [79.9, 79.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6],
            fillOpacity: 0.4,
            color: '#3399D9',
            lineColor: '#3399D9',
            fillColor: {
                linearGradient: [0, 0, 0, 400],
                stops: [
                    [0, Highcharts.getOptions().colors[1]],
                    [1, 'rgba(2,0,0,0)']
                ]
            }
        }
    ]
});

var genderColors = Highcharts.setOptions({
    colors: ['#2F85C6', '#A82084']
});


Highcharts.chart('gender', {
    chart: {
        type: 'pie',
        backgroundColor: '#2a2a2a'
    },

    tooltip: { enabled: false },
    
    plotOptions: {
        series:{
            states:{
                hover:{
                    enabled:false
                }
            }
        },
        pie: {
            size: 40,
            borderWidth:0,
            dataLabels: {
                enabled: false
            }
        }
    },
    credits: {
        enabled: false
    },

    title: {
        text: false
    },

    series: [{
        data: [
            ['man', 44.2],
            ['woman', 26.6],
        ]
    }]
})
