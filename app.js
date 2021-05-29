const quiz = [
  {
    question: 'c-oneの前身アイスの会設立日は？',
    answers: [ '5月9日', '4月9日', '3月9日', '7月7日','不明'],
    correct: '不明'
  }, {
    question: '平均点で最高点を叩き出したアイスは？',
    answers: [ 'ジェラマルチョコ', 'パルムプレーン', 'パルムいちご', '爽バニラ','スーパーカップバニラ'],
    correct: 'パルムプレーン'
  }, {
    question: 'ジェラートマルシェで平均最低点を叩き出したのは？',
    answers: [ 'りんご', 'ラムレーズン', '安納いも', 'マロン','抹茶'],
    correct: 'ラムレーズン'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
