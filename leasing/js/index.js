const input = document.querySelectorAll('.text'),
      range = document.querySelectorAll('.range'),
      costOfCar = input[0],
      costOfCarRange = range[0],
      contribution = input[1],
      percent = document.querySelector('#percent'),
      percentRange = range[1],
      period = input[2],
      periodRange = range[2];

// console.log(costOfCar.value)

const state = {
    costOfCar: costOfCar.value,
    contribution: contribution.value,
    percent: percent.value,
    period: period.valueб
}

const cost = 5000000,
      contr = 500000

costOfCar.value = cost.toLocaleString()
contribution.value = contr.toLocaleString()

function changeRange(range, input) {
    range.addEventListener('input', () => {
        input.value = range.value;
    })
}

function changeInput(range, input, min, max) {
    input.addEventListener('change', () => {
        if (input.value < min) {
            input.value = min
        } else if (input.value > max) {
            input.value = max
        }
    
        range.value = input.value;
    })
}

changeRange(costOfCarRange, costOfCar);
changeInput(costOfCarRange, costOfCar, 1000000, 6000000);
changeRange(percentRange, percent);
changeInput(percentRange, percent, 1, 100);
changeRange(periodRange, period);
changeInput(periodRange, period, 1, 60);


function inputData() {
    state.contribution = +contribution.value.replace(/\D/g, '')
    state.costOfCar = +costOfCar.value.replace(/\D/g, '')
    state.percent = +percent.value.replace(/\D/g, '')
}

inputData()

costOfCar.addEventListener('input', () => {

    inputData()

    costOfCar.value = (+costOfCar.value).toLocaleString()

    if(percent.value != '') {
        state.contribution = (+((state.costOfCar / 100) * state.percent)).toLocaleString()
        contribution.value = state.contribution
    }

    if(costOfCar.value < 1000000) {
        contribution.value = (1000000 / 100) * state.percent
    }
    if(costOfCar.value > 6000000) {
        contribution.value = (6000000 / 100) * state.percent
    }
})

contribution.addEventListener('input', () => {

    inputData()

    if(percent.value != '') {
        state.costOfCar = (state.contribution / state.percent) * 100
        costOfCar.value = (+state.costOfCar).toLocaleString()
    }

    if(contribution.value < 100000) {
        contribution.value = (1000000 / 100) * state.percent
        costOfCar.value = 1000000
    }
    if(contribution.value > 600000) {
        contribution.value = (3600000 / 100) * state.percent
        costOfCar.value = 6000000
    }
})

percent.addEventListener('input', () => {

    inputData()

    percent.value = percent.value.replace('%', '') + '%'

    if(costOfCar.value != '') {
        state.contribution = (+state.costOfCar / 100) * state.percent
        contribution.value = (+state.contribution).toLocaleString()
    }
})

costOfCarRange.addEventListener('input', () => {

    inputData()

    costOfCar.value = costOfCarRange.value

    if(percent.value != '') {
        state.contribution = (+((state.costOfCar / 100) * state.percent)).toLocaleString()
        contribution.value = state.contribution
    }
})

percentRange.addEventListener('input', () => {

    inputData()

    percent.value = percentRange.value + '%'

    if(costOfCar.value != '') {
        state.contribution = (+state.costOfCar / 100) * state.percent
        contribution.value = (+state.contribution).toLocaleString()
    }
})

// function changeRange(range, input) {
//     range.addEventListener('input', () => {
//         input.value = range.value;
//     })
// }

// function changeInput(range, input, min, max) {
//     input.addEventListener('change', () => {
//         if (input.value < min) {
//             input.value = min
//         } else if (input.value > max) {
//             input.value = max
//         }
    
//         range.value = input.value;
//     })
// }

// changeRange(costOfCarRange, costOfCar);
// changeInput(costOfCarRange, costOfCar, 1000000, 6000000);
// changeRange(percentRange, percent);
// changeInput(percentRange, percent, 1, 100);
// changeRange(periodRange, period);
// changeInput(periodRange, period, 1, 60);

// let _contribution = contribution.value,
//       _costOfCar = costOfCar.value;

// costOfCar.addEventListener('input', () => {
//     if(costOfCar.value != '') {
//         _contribution = (+costOfCar.value * +percent.value) / 100;
//     }

//     output();
// })

// costOfCarRange.addEventListener('input', () => {
//     if(costOfCar.value != '') {
//         _contribution = (+costOfCar.value * +percent.value) / 100 + '₽';
//     }

//     output();
// })

// contribution.addEventListener('input', () => {
//     if(costOfCar.value != '') {
//         _contribution = (+costOfCar.value * +percent.value) / 100 + '₽';
//     }

//     output();
// })

// percentRange.addEventListener('input', () => {
//     if(costOfCar.value != '') {
//         _contribution = (+costOfCar.value * +percent.value) / 100 + '₽';
//     }

//     output();
// })

// percent.addEventListener('input', () => {
//     if(costOfCar.value != '' && percent.value != '') {
//         _contribution = (+costOfCar.value * +percent.value) / 100 + '₽';
//     }

//     output();
// })

// function output() {
//     contribution.value = (+(_contribution.replace('₽', ''))).toLocaleString();
//     console.log(contribution.value, _contribution)
//     costOfCar.value = (+_costOfCar).toLocaleString();
// }

// function addPercent(input) {
//     input.addEventListener('change', () => {
//         input.value = `${input.value}%`;
//     })
// }

// addPercent(percent);


