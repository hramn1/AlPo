"use strict"

let players = document.querySelectorAll(`.player-static tbody tr`);
let playersArr = [];
let playersNic = [];
let playerIncomeArr = [];
class Player {
  constructor(rank, nickName, playerIncome, fraq) {
    this.rank = rank;
    this.nickName = nickName;
    this.playerIncome = playerIncome;
    this.fraq = fraq;
  }
}
for(let player of players){
  let rank = player.querySelector(`.player-position`).textContent;
  let nickName = player.querySelector(`.player-nik`).textContent;
  let playerIncome = player.querySelector(`.player-income`).textContent;
  let fraq = player.querySelector(`.player-fraq`).dataset.fraq;
  let playerObj = new Player(rank, nickName, playerIncome, fraq);
  playersArr.push(playerObj);
  playersNic.push(playerObj.nickName);
  playerIncomeArr.push(playerObj.playerIncome);

}
console.log(...playerIncomeArr);
var ctx = document.getElementById('CharTotal').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [...playersNic],
    datasets: [{
      label: 'Статистика',
      backgroundColor: 'rgb(62,173,255)',
      fill: false,
      borderColor: 'rgb(62,173,255)',
      data: [...playerIncomeArr]

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
      //  barPercentage: 1.0,
        categoryPercentage: 0.9,
        gridLines: {
          display: false,
        //  drawBorder: false
        }
      }],
      xAxes: [{
        ticks: {
          display: true,
          fontColor: `#ffffff`,
        },
        gridLines: {
          //display: false,
          //drawBorder: false
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
