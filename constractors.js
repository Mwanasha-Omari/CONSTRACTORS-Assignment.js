class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable !=this.isAvailable;
    }
}
const van = new Car('Van', 'Toyota', 2015, 'true')
console.log({van});
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const smallcar = new Rental ('Volvo', 'Aisha', "2024-4-23", "2024-7-12")
console.log({smallcar});

//Two
class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}
const sampleQuestion = new Question(
    "Which country is in East Africa?",
    ["Ethiopia", "Kenya", "Madagascar", "Djibouti"],
);
console.log(sampleQuestion.checkAnswer("Kenya"));
console.log(sampleQuestion.checkAnswer("kenya"));
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}
const quiz = new Quiz();
const firstquestion = new Question("What is 20+5 ?", ["3", "25", "5"], "25");
const secondquestion = new Question("Who is the parent?", ["Njiru", "Mary", "Sammy"], "Njiru");
quiz.addQuestion(firstquestion);
quiz.addQuestion(secondquestion);
quiz.submitAnswer("25");
quiz.submitAnswer("Sammy");
console.log("Score:", quiz.score);