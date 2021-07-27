class QuizeApp{
    constructor(title){
        this.setTitle(title)

        this.quiz = [{
            question:"Who was the first President of the United States?",
            options:["George Washington","Thomas Jefferson","Thomas Edison","I don't know"],
            answer:3
        },{
            question:"I love ?",
            options:["pakistan","sri-lanka","india","gaziyabad"],
            answer:2
        },{
            question:"what color is a apple?",
            options:["Green","red","white","I don't know"],
            answer:1
        },{
            question:"abcdefasdsad sada sdasd sad  as?",
            options:["asdasd","Tasdsa","asdsadan","I don't know"],
            answer:0
        },{
            question:"Who was the first President of the United States?",
            options:["George Washington","Thomas Jefferson","Thomas Edison","I don't know"],
            answer:3
        }]

        this.currentQuestion = 0;

        this.optionSelected = false;

        this.gameScore = 0;
    }
    setTitle(title){
        globalThis.document.querySelector("header h1").innerHTML = title
    }
    createOption(a, id, txt){
        var div = globalThis.document.createElement("div")
        div.classList.add("option")

        var title = document.createElement("span")
        title.classList.add("qtitle")
        title.innerHTML = txt

        var btn = document.createElement("span")
        btn.classList.add("btn")
        btn.id = id
        btn.innerHTML = "SELECT ANSWER"

        div.appendChild(title)
        div.appendChild(btn)

        return a.appendChild(div)
    }

    nextQuestion(){
        if(this.currentQuestion+1 <= 4){
            this.removeQuestion()
            this.currentQuestion++;
            // this.setQuestionCount()
            this.loadQuestion()
        }
    }

    addEventListenerOnOptions(){
        var btn = globalThis.document.querySelectorAll(".option .btn");
        btn.forEach(b => {
            b.addEventListener("click",() => {
                quiz.checkAnswer(b);
            })
        })
    }

    loadQuestion(){
        var a =  globalThis.document.querySelector("main")
        globalThis.document.querySelector("#question").innerHTML = this.quiz[this.currentQuestion].question
        this.quiz[this.currentQuestion].options.forEach((opt, index) => {
            this.createOption(a, index, opt)
            // console.log(opt, index)
        })
        // this.setQuestion(this.quiz[this.currentQuestion].question)
        globalThis.document.querySelector("#remaining").innerHTML = `Question ${this.currentQuestion+1} of 5`
        this.addEventListenerOnOptions()
    }

    removeQuestion(){
        globalThis.document.querySelectorAll(".option").forEach(q => {
            q.remove();
        })
        this.optionSelected = false;
    }

    checkAnswer(ans){
        if(!this.optionSelected){
            if(ans.id == this.quiz[this.currentQuestion].answer){
                // alert("Yay");
                ans.classList.toggle("correct")
                this.gameScore++;
            } else {
                // alert("Boo");
                ans.classList.toggle("wrong")
            }
            this.optionSelected = true;
        }
    }
}

var quiz = new QuizeApp("Awesome Quiz")

quiz.loadQuestion()
// quiz.removeQuestion()
// quiz.nextQuestion()

let questionCounts = 1;
document.querySelector("#next").addEventListener("click",()=>{
    // alert("Loading Next Page")
    // console.log(quiz.quiz.length, questionCounts)
    if(questionCounts == quiz.quiz.length){
        alert("Thank You for playing!")
        alert("Your Score is "+quiz.gameScore)
        location.reload();
    }
    quiz.nextQuestion()
    questionCounts++;
})