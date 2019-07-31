function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const answerObj = [{
  question: '(CESPE/2019) A Polícia Rodoviária Federal integra o Sistema Nacional de Trânsito, competindo-lhe, no âmbito das rodovias e estradas federais, implementar as medidas da Política Nacional de Segurança e Educação de Trânsito.',
  answers: [
  'Certo',
  'Errado'],
  
  correct: [1],
  messages: {
    pass: 'Parabéns! Você acertou.',
    fail: 'Você errou. Segundo Art. 20, III do CTB: Compete à Polícia Rodoviária Federal, no âmbito das rodovias e estradas federais: (...) VIII - implementar as medidas da Política Nacional de Segurança e Educação de Trânsito.' } },

{
  question: '(CESPE/2010) De acordo com o CTB, Compete ao Conselho Nacional de Trânsito (CONTRAN) normatizar os procedimentos sobre a aprendizagem, a habilitação e a expedição de documentos de condutores de veículos.',
  answers: [
  'Certo',
  'Errado'],

  correct: [1],
  messages: {
    pass: 'Parabéns! Você acertou.',
    fail: 'Você errou. Segundo o Art. 12, X, do CTB: Compete ao CONTRAN: (...) X - normatizar os procedimentos sobre a aprendizagem, habilitação, expedição de documentos de condutores, e registro e licenciamento de veículos.' } },

{
  question: '(CESPE/2012) Trânsito, segundo o Código de Trânsito Brasileiro, corresponde à utilização das vias por pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não, para fins de circulação, parada, estacionamento e operação de carga ou descarga.',
  answers: [
  'Certo',
  'Errado'],

  correct: [1],
  messages: {
    pass: 'Parabéns! Você acertou.',
    fail: 'Você errou. Segundo o Art. 1 Parágrafo 1 do CTB: Considera-se trânsito a utilização das vias por pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não, para fins de circulação, parada, estacionamento e operação de carga ou descarga.' } },

{
  question: '(CESPE/2010) Ao CONTRAN compete coordenar os órgãos do Sistema Nacional de Trânsito.',
  answers: [
  'Certo',
  'Errado'],

  correct: [1],
  messages: {
    pass: 'Parabéns! Você acertou.',
    fail: 'Você errou. Segundo o Art. 12 do CTB: Compete ao CONTRAN: (...) II - coordenar os órgãos do Sistema Nacional de Trânsito, objetivando a integração de suas atividades' } },

{

  question: 'How many man-made objects have been sent to the surface Mars (successfully and unsuccessfully):',
  answers: [
  '2-5',
  '6-8',
  '9-13',
  '14+'],

  correct: [3],
  messages: {
    pass: 'Correct. 14 missions have tried to place objects on the surface of Mars, some of these missions contained multiple objects',
    fail: 'Sorry, the correct answer is 14+. 14 missions have tried to place objects on the surface of Mars, some of these missions contained multiple objects' } }];





var ReactCSS = React.addons.CSSTransitionGroup;

const Controls = ({
  currentQuestion,
  userAnswers,
  parentMoveBack,
  numQuestions,
  parentMoveForward,
  parentFinishTest,
  finishedAnswering }) =>
{

  return (
    React.createElement("div", null,
    currentQuestion > 0 ? React.createElement("button", { className: "btn", onClick: parentMoveBack, id: "prev" }, "Questão Anterior") : '',
    currentQuestion < numQuestions - 1 ? React.createElement("button", { className: "btn", onClick: parentMoveForward, id: "next" }, "Próxima Questão") : '',

    !finishedAnswering && currentQuestion == numQuestions - 1 ? React.createElement("p", null, "Responda todas as questões para continuar") : ''));




};
Controls.propTypes = {
  currentQuestion: React.PropTypes.number.isRequired,
  numQuestions: React.PropTypes.number.isRequired,
  userAnswers: React.PropTypes.array.isRequired,
  parentMoveBack: React.PropTypes.func.isRequired,
  parentMoveForward: React.PropTypes.func.isRequired,
  parentFinishTest: React.PropTypes.func.isRequired,
  testForUndefined: React.PropTypes.func.isRequired };


class ScoreArea extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "componentWillMount",





    () => {
      const userAnswers = this.props.userAnswers;
      const userAnswerLen = userAnswers.length;
      const theQuestions = this.props.allQuestions;
      let score = this.state.score;
      let passFail = [];
      for (let i = 0; i < userAnswerLen; i++) {
        let correctAnswers = theQuestions[i].correct;
        const corrAnsLen = correctAnswers.length;
        passFail[i] = 'fail';
        for (let x = 0; x < corrAnsLen; x++) {

          if (theQuestions[i].correct[x] == userAnswers[i]) {
            score++;
            passFail[i] = 'pass';
          }
        }
      }

      this.setState({
        score: score,
        passFail: passFail });

    });_defineProperty(this, "render",

    () => {
      let theUserAnswers = this.props.userAnswers;
      return (
        React.createElement("div", null,
        React.createElement("p", { id: "your-score-lab", className: "score-p" }, "Sua Pontuação foi: ", this.state.score, " / ", this.props.allQuestions.length),
        React.createElement("table", null,
        React.createElement("tbody", null,
        this.props.allQuestions.map(function (question, i) {
          return (
            React.createElement("tr", null,
            React.createElement("td", { className: "result-question-num" },
            React.createElement("p", null, i + 1)),

            React.createElement("td", null,
            React.createElement("div", { className: "feedback", key: question.answers[this.props.userAnswers[i]] + 'top-div' },
            React.createElement("h4", { key: question.answers[theUserAnswers[i]] + 'first-p' }, question.question),
            React.createElement("p", { key: question.answers[theUserAnswers[i]] + 'last-p', className: this.state.passFail[i] }, question.answers[theUserAnswers[i]]),
            React.createElement("p", { key: 'error-' + i }, question.messages[this.state.passFail[i]])))));




        }, this)))));




    });this.state = { score: 0, passFail: [] };}}


ScoreArea.propTypes = {

  userAnswers: React.PropTypes.array.isRequired,
  allQuestion: React.PropTypes.object.isRequired };



const Question = ({
  parentAnswerClick,
  questionNum,
  questionBlockNumber,
  userAnswers,
  option }) =>
{

  return (
    React.createElement("div", { className: userAnswers[questionBlockNumber] == questionNum ? "user-choice selectedans" : "user-choice",
      onClick: parentAnswerClick,
      "data-question-num": questionNum,
      "data-block-num": questionBlockNumber },

    React.createElement("div", { className: userAnswers[questionBlockNumber] == questionNum ? "checkbox selected" : "checkbox" }),


    React.createElement("p", { className: userAnswers[questionBlockNumber] == questionNum ? "quiz-answer selected" : "quiz-answer" },
    option)));





};
Question.propTypes = {
  parentAnswerClick: React.PropTypes.func.isRequired,
  questionNum: React.PropTypes.number.isRequired,
  questionBlockNumber: React.PropTypes.number.isRequired,
  option: React.PropTypes.number.isRequired,
  userAnswers: React.PropTypes.array.isRequired };


const QuestionBlock = ({
  setUserAnswers,
  question,
  questionBlockNumber,
  userAnswers,
  testForUndefined }) =>
{

  const onAnswerClick = e => {
    var blockNum = e.currentTarget.dataset.blockNum;
    var selection = e.currentTarget.dataset.questionNum;
    setUserAnswers(blockNum, selection);
    testForUndefined();
  };

  let thePotentialAnswers = question.answers.map(function (answer, i) {
    return (
      React.createElement(Question, { questionNum: i,
        questionBlockNumber: questionBlockNumber,
        parentAnswerClick: onAnswerClick,
        userAnswers: userAnswers,
        key: answer,
        option: answer }));

  }, this);

  const transitionOptions = {
    transitionName: "fade",
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 100 };


  return (
    React.createElement("div", { className: "assessment-question" },
    React.createElement("h4", null, question.question),
    React.createElement("div", { className: "answer-holder" },
    React.createElement(ReactCSS, transitionOptions,
    thePotentialAnswers))));





};

QuestionBlock.propTypes = {
  setUserAnswers: React.PropTypes.func.isRequired,
  question: React.PropTypes.object.isRequired,
  questionBlockNumber: React.PropTypes.number.isRequired,
  userAnswers: React.PropTypes.array.isRequired,
  testForUndefind: React.PropTypes.func.isRequired };


const QuestionArea = ({
  userAnswers,
  parentSetUserAnswers,
  currentQuestion,
  allQuestions,
  testForUndefined }) =>
{
  return (
    React.createElement("div", { id: "question-holder" },
    React.createElement(QuestionBlock, { userAnswers: userAnswers,
      setUserAnswers: parentSetUserAnswers,
      testForUndefined: testForUndefined,
      questionBlockNumber: currentQuestion,
      question: allQuestions[currentQuestion] })));



};
QuestionArea.propTypes = {
  userAnswers: React.PropTypes.array.isRequired,
  currentQuestion: React.PropTypes.number.isRequired,
  allQuestions: React.PropTypes.object.isRequired,
  parentSetUserAnswers: React.PropTypes.func.isRequired,
  testForUndefined: React.PropTypes.func.isRequired };


class Test extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "moveForward",










    () => {
      let curQuest = this.state.currentQuestion;
      if (curQuest <= this.state.numQuestions - 1) {
        this.setState({
          currentQuestion: this.state.currentQuestion + 1 });

      }
    });_defineProperty(this, "moveBack",

    () => {
      let curQuest = this.state.currentQuestion;
      if (curQuest > 0) {
        this.setState({
          currentQuestion: this.state.currentQuestion - 1 });

      }
    });_defineProperty(this, "finishTest",

    () => {
      this.setState({
        quizComplete: 1 });

    });_defineProperty(this, "setUserAnswers",

    (a, b) => {
      let currArray = this.state.userAnswers;
      currArray[a] = b;

      this.setState({
        userAnswers: currArray });


    });_defineProperty(this, "testForUndefined",
    () => {

      let filled = true;
      for (let x = 0; x < answerObj.length; x++) {
        if (typeof this.state.userAnswers[x] == 'undefined') {
          filled = false;

        }
      }

      this.setState({
        finishedAnswering: filled });


      return filled;
    });_defineProperty(this, "render",

    () => {
      return (
        React.createElement("div", { id: "quizHolder" },
        !this.state.quizComplete ?

        React.createElement("div", null,

        React.createElement(QuestionArea, { parentSetUserAnswers: this.setUserAnswers,
          userAnswers: this.state.userAnswers,
          currentQuestion: this.state.currentQuestion,
          allQuestions: answerObj,
          testForUndefined: this.testForUndefined }),


        React.createElement(Controls, { parentMoveForward: this.moveForward,
          userAnswers: this.state.userAnswers,
          parentMoveBack: this.moveBack,
          parentFinishTest: this.finishTest,
          finishedAnswering: this.state.finishedAnswering,
          currentQuestion: this.state.currentQuestion,
          numQuestions: this.state.numQuestions }),

        this.state.finishedAnswering && React.createElement("button", { className: "btn", id: "finish", onClick: this.finishTest }, "Finalizar")) :

        React.createElement(ScoreArea, { userAnswers: this.state.userAnswers,
          allQuestions: answerObj })));




    });this.state = { currentQuestion: 0, userAnswers: [], finishedAnswering: false, quizComplete: 0, numQuestions: answerObj.length };}}


ReactDOM.render(
React.createElement(Test, null),
document.getElementById('test-div'));