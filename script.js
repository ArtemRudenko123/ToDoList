const defaultTasks = ["HTML", "CSS", "JS", "Bootstrap"];
function addtask(task) {
    const todolist = document.getElementById("todo-list")
    const li = document.createElement("li")
   li.className = "todo"
   li.innerHTML = `
    <label class="todo__label">
                            <input type="checkbox" class="todo__label-input">
                            <span class="todo__label-title">${task}</span>
                        </label>
                        <div class="todo__settings">
                            <button class="todo__settings-delete delete-btn" id="dlt">
                                delete
                            </button>
                            <button class="todo__settings-edit edit-btn" id="edt">
                                edit
                            </button>
                        </div>
   `
   todolist.appendChild(li)
} 
defaultTasks.forEach(task => addtask(task))
document.getElementById("btn").addEventListener("click", (event)=>{
    event.preventDefault()
    const todoinput = document.getElementById("todo-input")
   addtask(todoinput.value)
    
})

document.getElementById("todo-list")
        .addEventListener("click",
            function (event) {
                if (event.target.classList.contains("delete-btn")) {
                    event.target.parentElement.parentElement.remove();
                }
            });

document.getElementById("todo-list")
        .addEventListener("click",
            function (event) {
                if (event.target.classList.contains("edit-btn")) {
                    const tasktext = event.target.parentElement.parentElement.querySelector("span")
                    const newtext = prompt("newtask",tasktext.textContent)
                    if(newtext !=null){
                        tasktext.textContent = newtext.trim()
                    }
                }
            });            