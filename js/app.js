// collection of the ui variables
const form = document.querySelector("#task-form"),
    taskList = document.querySelector(".collection"),
    taskListTrial = document.querySelector(".this-a-trial"),
    taskInput= document.querySelector("#task"),
    filter=document.querySelector("#filter"),
    clearTask=document.querySelector(".clear-task");
    

    //creating the error div
    // const showAlert=(message, className)=>{
    //     const div = document.createElement('div');

    //     div.className = `${className}`
    //     console.log(div);

    //     div.appendChild(document.createTextNode(message));

    //     const container = document.querySelector(".trial");

    //     //adding the alert div inside the form element
    //     container.insertBefore(div, form);

    //     //remove the alert after 3 seconds
    //     setTimeout(()=>{
    //         document.querySelector('.error').remove();
    //     }, 3000)

    // }

    // calling the list delete function
    const listDelete=()=>{
        //  let slidesr = Array.from(slider.children);
        
        //     slidesr.forEach((slide, index) => {
        //     slide.addEventListener('click', ()=>{
        //     console.log('hello world');
        // })
        //     }
        //  )
    }
    
    //form event listeners
    const addTodo =(e)=> {
         //dynamically creating the li
        const li = document.createElement('li');
    
    // checking if the input values is empty
         if(taskInput.value === ""){
                // showAlert("Input cannot be empty","error")
                // alert("input cannot be empty");
                console.log("input");
         }

          const sidePre = document.createElement('a')
                //creating the image tag dynamically
                sidePre.innerHTML = `<img class="prefix" src="./images/business.svg" alt="">`
                li.appendChild(sidePre);
 
        //adding the materialize class name to the li name
        // li.className="collection-item";
        // li.className="slide";
        li.className="trial-list";
        // li.className="slide";
        

        //adding the input value to the li 
        li.appendChild(document.createTextNode(taskInput.value))
        
        
        //adding the li to the dom
        taskListTrial.appendChild(li);

        // store in local storage
        storeInLocalStorage(taskInput.value);
        
        // clear input
        taskInput.value = ""

        //the list delete function
        listDelete();
        
        
        e.preventDefault();
    }


    //store in the local storage system
    const storeInLocalStorage = (task) => {
        let tasks;

        if( localStorage.getItem('tasks')  === null){
            tasks=[]

        } else {

            //set the tasks to the local storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        //adding the task to the array
        tasks.push(task);

        //setting the task to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    const getTasks=()=>{
        let tasks;
        if( localStorage.getItem('tasks')  === null){
            tasks=[]

        } else {

            //set the tasks to the local storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(task => {   
     const li = document.createElement('li');
    const sidePre = document.createElement('a')
                //creating the image tag dynamically
        sidePre.innerHTML = `<img class="prefix" src="./images/business.svg" alt="">`
        li.appendChild(sidePre);
      
        //adding the materialize class name to the li name
        li.className="collection-item";
        
        //adding the input value to the li 
        li.appendChild(document.createTextNode(task))
        
        //adding the li to the dom
        taskList.appendChild(li);
        });

    }
    
    // loading eventlisterners
    const loadEventListeners =()=> {

        //making sure the task stays on dom reloaded
    document.addEventListener('DOMContentLoaded', getTasks)
    
    form.addEventListener('submit', addTodo)
}

loadEventListeners();
    


