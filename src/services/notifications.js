import LSService from "./LSservice";

const {getTasks} = LSService();

export default function checkDeadlines () {
    
    let nowTS;
    let tasks;
    let notifiedTasks = {};
    
    return function () {
        tasks = getTasks();
        nowTS = new Date ().getTime();
        if (tasks) {
            tasks.forEach((task) => {
                const deadlineTS = new Date(`${task.deadlineDate}T${task.deadlineTime}`).getTime();
                
                if (deadlineTS <= nowTS && !task.isDone) {
                    
                    if (!notifiedTasks[task.id]) {
    
                        notifiedTasks[task.id] = nowTS;
                        console.log(notifiedTasks[task.id])
                        new Notification('Список дел', { body: `Пришло время по задаче ${task.name}!`, icon:'icon'});
    
                    } else {
                        
                        if (nowTS - notifiedTasks[task.id] > 60000) {
                            
                            notifiedTasks[task.id] = nowTS;
    
                            let expiredTime = Math.floor((nowTS - deadlineTS) / 60000);
                            new Notification('Список дел', { body: `Задача ${task.name} просрочена на ${expiredTime} мин!`, icon:'icon'});
                        }
                    }
                }
            })
        }   
    }
}