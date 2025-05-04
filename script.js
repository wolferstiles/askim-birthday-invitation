document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const answer = document.querySelector('input[name="q1"]:checked').value;
    
    let feedbackMessage = '';
    
    if (answer === 'c') {
        feedbackMessage = 'Correct! Now you can proceed.';
    } else {
        feedbackMessage = 'Incorrect answer! Try again.';
    }
    
    document.getElementById('feedback').textContent = feedbackMessage;
    
    if (answer === 'c') {
        setTimeout(function() {
            window.location.href = 'next-question.html'; // Yeni sorulara yönlendirebiliriz.
        }, 2000); // 2 saniye bekle, doğru cevap verilirse yönlendir.
    }
});
