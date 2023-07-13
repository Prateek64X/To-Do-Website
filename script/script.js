/*Global Variables*/
var completedTasks = 0, totalTasks=0;

function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function getTodayDate(type)
{
    var todayDate = new Date();
    var dateStr = todayDate.getDate() + " " + todayDate.toLocaleString('en-US', { month: 'long' });
    var dayNameStr  = todayDate.toLocaleDateString('en-US', { weekday: 'long' });
    
    if (type == 'date')
    {
        return dateStr;
    }
    else if (type == 'day')
    {
        return dayNameStr;
    }
}

function addTask() {
    if (document.getElementById("taskInput").value == "")
    {
        alert("Please enter a task to add.");
        return;
    }

    var taskVal = document.getElementById("taskInput").value;
    var taskHTML = `
      <div class="card" style="margin-top: 8px;">
        <div class="row" style="display: flex; justify-content: space-between;">
          <div class="column">
            <p class="text">${taskVal}</p>
          </div>
          <div class="column" style="margin-left: auto;">
            <input type="button" class="btn btn-primary" value="Mark Done" onclick="deleteTask(this);">
          </div>
        </div>
      </div>
    `;
    document.querySelector("#tasksContainer").innerHTML += taskHTML;
    document.getElementById("taskInput").value = "";
    totalTasks++;
    getCompletedTasks();    //To Increase total counter after adding new tasks
}
  
function deleteTask(button) {
    var taskCard = button.closest(".card");
    taskCard.parentNode.removeChild(taskCard);
    completedTasks++;
    getCompletedTasks();    //To update completed counter after deleting tasks
}
  
function getCompletedTasks() {
    if (completedTasks > 0)
    {
        var completedTaskHeading = document.getElementById("completedTaskHeading");
        completedTaskHeading.innerHTML = "Completed Tasks: " + completedTasks + "/" + totalTasks;
    }
    else
    {
        return "";
    } 
}