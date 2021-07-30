var button = document.querySelector('button');
button.addEventListener('click', () => {
    var newTodo = document.querySelector('input').value;
    document.querySelector('input').value = '';
    addTodo(newTodo);

    function addTodo(todo){
        if(document.querySelectorAll('.todo').length <= 4){
        if(todo != ''){
        let div = document.createElement('div')
        div.classList.add('todo')
        div.classList.add('todo-remaining')
        let span = document.createElement('span')
        span.classList.add('todo-text');
        span.innerHTML = todo;
        let i = document.createElement('i')
        i.classList.add('fas');
        i.classList.add('fa-clipboard-check');
        div.appendChild(span)
        div.appendChild(i)
        document.querySelector('.todo-list').appendChild(div);
        markAsDone();
        removeTodo();
    } else{
        alert('First enter some value')
    }
}
        else{
            alert('pehle itne to karle bhai')
        }

}
}
)

function markAsDone(){
    var mark = document.querySelectorAll('.fa-clipboard-check');
    mark = [...mark];
    
    mark.forEach( i => {
        i.addEventListener('click', (i) => {
            i.target.parentElement.classList.remove('todo-remaining')
            i.target.parentElement.classList.add('todo-done')
            i.target.classList.remove('fa-clipboard-check');
            i.target.classList.add('fa-trash-alt');
            removeTodo();
        }
        )
    })
}


function removeTodo(){
    var dlt = document.querySelectorAll('.fa-trash-alt');
    var dlt = [...dlt];
    dlt.forEach( i => {
        i.addEventListener('click', (i) => {
            i.target.parentElement.remove();
        })
    })
};