'use strict';
$(document).ready(function() {
  try {
    $('.water-effect').ripples({
      resolution: 512,
      dropRadius: 20, //px
      perturbance: 0.04,
    });
    $('main').ripples({
      resolution: 128,
      dropRadius: 10, //px
      perturbance: 0.04,
    });
  }
  catch (e) {
    $('.error').show().text(e);
  }

  $('.disable').show().on('click', function() {
    $('.main-header').ripples('destroy');
    $(this).hide();
  });

  // Automatic drops
  setInterval(function() {
    var $el = $('main');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples('drop', x, y, dropRadius, strength);
  }, 400);
});

const profitPlayer = document.querySelectorAll('.player-static__date-sum');
const summuryPlayer = document.querySelector('.player-static__sum');
const playerEnter = document.querySelectorAll('.player-static__enter');
const playerOut = document.querySelectorAll('.player-static__out');
let sum = 0;
for(let i = 0; i < profitPlayer.length; i++){
    profitPlayer[i].textContent =   Number(playerOut[i].textContent) - Number(playerEnter[i].textContent);
    sum += profitPlayer[i].textContent * 1;
  summuryPlayer.textContent = sum;
}
var ctx = document.getElementById('myChart').getContext('2d');
let datePlay = document.querySelectorAll('.date-play');
let datePlayVallue = [];
for (let i = 0; i< datePlay.length; i++){
  datePlayVallue.push(datePlay[i].textContent)
}
let incomeIput = document.querySelectorAll('.player-static__date-sum');
let incomePlayer = [];
for (let i = 0; i < incomeIput.length; i++){
  incomePlayer.push(incomeIput[i].textContent);
}
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: [...datePlayVallue],
    datasets: [{
      label: 'Статистика',
      backgroundColor: 'rgb(62,173,255)',
      fill: false,
      borderColor: 'rgb(62,173,255)',
      data: [...incomePlayer]

    }]
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: true,
          fontColor: `#ffffff`,
          fontSize: 10,
          // padding: 85
        },
        maxBarThickness: 30,
        barPercentage: 1.0,
        categoryPercentage: 0.9,
        gridLines: {
          display: true,
          drawBorder: false
        }
      }],
      xAxes: [{
        ticks: {
          display: true,
          min: 0,
          fontColor: `#ffffff`,
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }]
    },
    legend: {
      display: true,
      labels: {
        fontColor: '#232323'
      }
    },
    tooltips: {
      enabled: true
    },
    layout: {
      padding: {
        top: 30,
        bottom: 40,
      }
    },
    animation: {
      easing: `easeInOutQuad`
    }
  }
});
