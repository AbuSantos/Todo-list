const lists = document.querySelector('.collection');
    // slides = Array.from(document.getElementsByClassName("collection-item"));
// console.log(slides);

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    previousTranslate = 0,
    animationID = 0,
    currentIndex = 0;

    
     document.addEventListener('DOMContentLoaded', ()=>{

         let taskLists = Array.from(lists.children);
     taskLists.forEach((taskList, index) => {
         
              //touch events
        taskList.addEventListener('touchstart', touchStart(index) )
        taskList.addEventListener('touchend', touchMove)
        taskList.addEventListener('touchmove', touchEnd)
                    
                    //mouse events
        taskList.addEventListener('mousedown', touchStart(index))
        taskList.addEventListener('mousemove', touchMove)
        taskList.addEventListener('mouseleave', touchEnd)    
     });
    })


        //stopping the right click, disable context menu
    window.oncontextmenu = function(event){
         event.preventDefault();
         event.stopPropagation();
         return false;
        }

       
    const touchStart = (index) => {
        return function(event){
            isDragging = true;
            currentIndex = index;
            startPos = getPositionX(event)
            // console.log(startPos);
            
            //  //making the slider animate on the x-axis
                animationID = requestAnimationFrame(animation)
        }
        }

    const touchMove = (event) => {
        if(isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = previousTranslate + currentPosition - startPos;
            console.log(currentTranslate);
            // console.log('move');
        }
   }

    const touchEnd = () => {
        isDragging = false
        // console.log('end');
    }

    //gettting position x
    const getPositionX =(event)=>{
        console.log(event.pageX);
     return   event.type.includes('mouse') 
                ? event.pageX
                : event.touches[0].clientX;
            }

    //setting the animation function
    const animation=()=>{
            setSlider()

        //calling the animation when you start dragging
        if(isDragging) requestAnimationFrame(animation);
    }

    //the slider function
    const setSlider =(taskList)=> {
       
        // taskList.style.transform = `translate${currentTranslate}px`

        // taskList.addEventListener('click',()=>{
        //     console.log("yes love");
        // })
        // console.log(taskList.children);
         
     }
   document.addEventListener('DOMContentLoaded', ()=>{

         let taskLists = Array.from(lists.children);
     taskLists.forEach((taskList, index) => {
         console.log();

 
        taskList.style.transform = `translate${currentTranslate}px`


     });
    })
        