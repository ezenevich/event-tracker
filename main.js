const progress = document.querySelector(".progress__bar");
const currentScoreText = document.querySelector("#currentScore");
const targetScoreText = document.querySelector("#targetScore");

const targetScore = 25;
targetScoreText.textContent = targetScore;

const scores = [6];

const renderScore = (scores) => {
  return scores.map((score) => {
    switch (score) {
      case 10:
        return 3;
      case 9:
        return 2;
      case 8:
        return 1;
      case 7:
        return 0.5;
      case 6:
        return 0;
      case 5:
        return -1;
      case 4:
        return -2;
      case 3:
        return -3;
      case 2:
        return -4;
      default:
        0;
    }
  });
};

const currentScore = renderScore(scores).reduce((sum, score) => {
  return sum + score;
});
currentScoreText.textContent = currentScore;

const renderedScore = (100 / targetScore) * currentScore;

progress.style.width = `${renderedScore}%`;
