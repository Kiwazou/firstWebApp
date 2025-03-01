function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        
        // 削除機能を追加
        li.addEventListener("click", function() {
            this.remove(); // クリックすると削除
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
