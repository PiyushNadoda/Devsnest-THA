class QuizeApp{
    constructor(title){
        
        this.setTitle(title)

        this.quiz = [{
            question: 'What is the name of iron man\'s ai ?',
            option: ['Ultron','Alexa','Jarvis','Vision'],
            answer:2
        },{
            question: 'How much infinity stones are there ?',
            option: ['4','6','8','infinite'],
            answer:1
        },{
            question: 'what is clint barton\'s(Hawkeye) wife\'s name?',
            option: ['Laura Barton','Dora Barton','Natasha','Pepper Potts'],
            answer:0
        },{
            question: 'what is the name of thanos\'s planet',
            option: ['Titan','Knowhere','Mirzapur','Nidavellir'],
            answer:0
        }
    ];
    
        this.currentQuestion = 0;

        this.optionSelected = false;

        this.positiveScore = 0;

        this.negativeScore = 0;
    }
    setTitle(title){
        globalThis.document.querySelector("header h1").innerHTML = title
    }
    createOption(a, id, txt){
        var div = document.createElement("div")
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
            this.loadQuestion()
        }
    }

    addEventListenerOnOptions(){
        var btn = globalThis.document.querySelectorAll(".option .btn");
        btn.forEach(b => {
            b.addEventListener("click",() => {
                quiz.selectAnswer(b);
            })
        })
        var lock = document.querySelector('#lock');

        lock.addEventListener('click',() => { this.checkAnswer(btn) })
    }

    loadQuestion(){
        var a =  globalThis.document.querySelector("main")
        globalThis.document.querySelector("#question").innerHTML = this.quiz[this.currentQuestion].question
        this.quiz[this.currentQuestion].option.forEach((opt, index) => {
            this.createOption(a, index, opt)
        })
        globalThis.document.querySelector("#remaining").innerHTML = `Question ${this.currentQuestion+1} of 4`
        this.addEventListenerOnOptions()
    }

    removeQuestion(){
        globalThis.document.querySelectorAll(".option").forEach(q => {
            q.remove();
        })
        this.optionSelected = false;
    }

    checkAnswer(ans){
        ans.forEach(b => {
            if(b.classList.contains('selected')){
                b.classList.remove('selected')
                if(b.id == this.quiz[this.currentQuestion].answer){
                    b.classList.toggle("correct")
                    this.positiveScore++;
                } else {
                    b.classList.toggle("wrong")
                    this.negativeScore++;
                }
            }
         } )
                document.querySelector('.wrong-answers').innerHTML = this.negativeScore;
                document.querySelector('.right-answers').innerHTML = this.positiveScore;
    }
    selectAnswer(newSelection){
        var isSelected = Boolean(document.querySelector('.selected'))
        if( !Boolean(document.querySelector('.correct')) && !Boolean(document.querySelector('.wrong'))){
        if(isSelected){
            document.querySelector('.selected').classList.remove('selected')
            newSelection.classList.add('selected')
        }
        else{
            newSelection.classList.add('selected')
        }
        }}
}

var quiz = new QuizeApp("Awesome Quiz")

quiz.loadQuestion()

let questionCounts = 1;
document.querySelector("#next").addEventListener("click",()=>{
    if(questionCounts == quiz.quiz.length){
        alert(`right answers: ${quiz.positiveScore}
wrong answers: ${quiz.negativeScore}`)
        location.reload();
    }
    quiz.nextQuestion()
    questionCounts++;
})





