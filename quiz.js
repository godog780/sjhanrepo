const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next');
const resultEl = document.getElementById('result');

let currentIndex = 0;
let score = 0;

function showQuestion() {
  const current = QUESTIONS[currentIndex];
  questionEl.textContent = `${currentIndex + 1}. ${current.question}`;
  optionsEl.innerHTML = '';
  current.options.forEach((opt, idx) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.value = idx;
    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${opt}`));
    li.appendChild(label);
    optionsEl.appendChild(li);
  });
}

function showResult() {
  questionEl.classList.add('hidden');
  optionsEl.classList.add('hidden');
  nextBtn.classList.add('hidden');
  resultEl.classList.remove('hidden');
  resultEl.textContent = `총 ${QUESTIONS.length}문제 중 ${score}문제를 맞혔습니다.`;
}

nextBtn.addEventListener('click', () => {
  const selected = optionsEl.querySelector('input[name="option"]:checked');
  if (!selected) return alert('보기를 선택하세요.');
  if (parseInt(selected.value, 10) === QUESTIONS[currentIndex].answer) {
    score++;
  }
  currentIndex++;
  if (currentIndex < QUESTIONS.length) {
    showQuestion();
  } else {
    showResult();
  }
});

showQuestion();
