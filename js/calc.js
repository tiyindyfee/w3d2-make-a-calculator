function add(n1, n2) {
    return n1 + n2
}

function subtract(n1, n2) {
    return n1 - n2
}

function divide(n1, n2) {
    return n1 / n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function calc(e) {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var answer = ''

    switch (e.target.value) {
        case '+':
            answer = add(n1, n2)
            break
        case '-':
            answer = subtract(n1, n2)
            break
        case '/':
            answer = divide(n1, n2)
            break
        case '*':
            answer = multiply(n1, n2)
            break
    }

    // if (e.target.value === '+') {
    //     answer = add(n1, n2)
    // }
    // else if (e.target.value === '-') {
    //     answer = subtract(n1, n2)
    // }
    // else if (e.target.value === '/') {
    //     answer = divide(n1, n2)
    // }
    // else if (e.target.value === '*') {
    //     answer = multiply(n1, n2)
    // }

    document.getElementById('n1').value = answer
    document.getElementById('n2').value = ''

    return answer
}

function num(e) {
    document.getElementById('n2').value += e.target.value
}

document.querySelectorAll('.btn-calc').forEach(btnCalc => {
    btnCalc.addEventListener('click', calc)
})

document.querySelectorAll('.btn-num').forEach(btnNum => {
    btnNum.addEventListener('click', num)
})
