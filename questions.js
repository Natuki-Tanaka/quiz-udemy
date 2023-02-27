const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))

// 正しい答え
const correctAnswers = {
    question1: 'B',
    question2: 'A',
    question3: 'A',
    question4: 'A'
};

function checkClickedAnswer(event) {
    // クリックされた答えの要素(liタグ)
    const clickedAnswerElement = event.currentTarget;

    // 選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;
    // クリックされた答えの要素の親id
    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    // 正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];
    // メッセージを入れる変数を用意
    let message;

    // カラーコードを入れる変数を用意
    let answerColorCode;

    // 答えが正しいか判定
    if (selectedAnswer === correctAnswer) {
        // 正しい答えだった時
        message = '正解です！おめでとう！';
        answerColorCode = '';
        quizColor = '#FFFF00';
    } else {

        // 間違った答えだった時
        message = 'ざんねん！不正解です！';
        answerColorCode = '#e8172c';
        quizColor = '#FF0000';
    }
    alert(message);

    // 判定結果によってメッセージを設定
    document.getElementById('additional-comment').innerText = message;
    // 設定したメッセージを表示
    document.querySelector('span#additional-comment').style.display = 'block';
    // Quizの色を変更（正解か不正解かによって色が変わる)
    document.querySelector('span#title').style.color = quizColor;
    // 色を変更(間違っていた時だけ色が変わる)
    document.querySelector('div#section-correct-answer').style.color = answerColorCode;
    // 答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
   
}

