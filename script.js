var systemGuess = Math.floor(Math.random()*100)+1
var guess =0
function guessNumber()
{
    var num = document.getElementById('in').value
    if(num==='' || num>100 || num<1)
    {
        document.getElementById('out1').innerText = 'Input is not valid'
    }
    else
    {
        guess++
        var num =parseInt(document.getElementById('in').value)
        if(num === systemGuess)
        {
            document.getElementById('out1').innerText = 'Got the Answer'
            document.getElementById("button").disabled = true;
        }
        else if(num> systemGuess)
        {
            document.getElementById('out1').innerText = 'Guess a smaller number'
        }
        else
        {
            document.getElementById('out1').innerText = 'Guess a greater number'
        }
        document.getElementById('out2').innerText = 'Number of guesses: ' +guess
    }
}