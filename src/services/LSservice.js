function LSService () {

    function getTasks () {
        let tasksArr;
        if (localStorage.getItem('TODOtasks')) {
            tasksArr = JSON.parse(localStorage.getItem('TODOtasks'));
        }
        return tasksArr;
    }

    function setTasks (newTask) {
        
        if (getTasks()) {
            const newArr = getTasks();
                  newArr.push(newTask);
            localStorage.setItem('TODOtasks', JSON.stringify(newArr));
        } else {
            localStorage.setItem('TODOtasks', JSON.stringify([newTask]));
        }
    }

    function updTasks (tasks) {
        localStorage.setItem('TODOtasks', JSON.stringify(tasks));
    }

    return {getTasks, setTasks, updTasks};
}

export default LSService;