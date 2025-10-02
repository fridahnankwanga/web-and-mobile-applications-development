//
 // Name: [NANKWANGA FRIDAH]
 // access number: [B33240]
 // Registration Number: [M25B12/033]
 
// --- PROBLEM EXPLANATION & JUSTIFICATION ---
//The chosen real-world problem is managing a personalized Daily Task Reminder System.
// our busy lives, we need a simple, automated way to see what we need to do 
//on a specific day without sifting through a long list of all tasks.

//This program solves this by:
//1. Storing a list of tasks, each assigned to one or more days of the week.
//2. Using a function to determine the current day.
//3. Looping through the task list.
//4. Using conditional logic to check if the task's assigned day matches the current day.
//5. Displaying only the relevant tasks to the user.

// --- DATA STRUCTURE: A list of tasks with their scheduled days ---
const dailyTasks = [
    { name: "Attend JavaScript Lecture", days: ["Thursday", "Tuesday"] },
    { name: "Submit Assignment 1 (UCU)", days: ["Tuesday"] },
    { name: "Morning Exercise", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { name: "Weekly Rvision", days: ["Friday"] },
    { name: "community worship", days: ["Thursday"] },
    { name: "Laundary", days: ["Saturday", "Sunday"] }
];

//  FUNCTIONS 
 
function getCurrentDay() {
    //Justification for using a Function:
   // Getting the current day is a distinct task that may involve date logic.
   // Encapsulating it in a function promotes modularity and reusability,

    // For a real-time system:
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

// Displays the tasks scheduled for the current day.
//  {string} currentDay - The day to check tasks against.
function checkAndDisplayReminders(currentDay) {
    console.log(`Your Task Reminders for ${currentDay} ---`);
    let tasksFound = 0;

    // --- LOOPS (forEach) ---
    // We use a `forEach` loop to check every task object in the `dailyTasks` array.
    dailyTasks.forEach(task => {

        // --- CONDITIONS (if, includes) ---
        
        //Justification for using a Condition:
        //The core of the reminder system is the **decision** of whether or not to
       // display a task. We use the `if` condition to check if the task's schedule
        //(`task.days`) includes the `currentDay`. Only if this condition is TRUE,
       // the task is displayed.
        if (task.days.includes(currentDay)) {
            console.log(`- [ ] ${task.name}`);
            tasksFound++;
        }
    });
    
   // Justification for using a Loop (`forEach`):
   // A loop is necessary to **iterate** over the entire `dailyTasks` list,
   // ensuring that *every* scheduled task is checked against the current day.
    

    // --- CONDITIONS (if/else for output) ---
    // A final condition to provide meaningful feedback if no tasks were found.
    if (tasksFound === 0) {
        console.log("Good news! You have no specific tasks scheduled for today.");
    }

    console.log("-------------------------------------------------");
}

// --- MAIN PROGRAM EXECUTION ---

const day = "Monday";
checkAndDisplayReminders(day);

console.log("\nThe End");
