let checkboxes = document.querySelectorAll(".checkbox")
// b.checked = false;
// console.log(b.checked)

let mode = 1;
// 0:light
// 1: dark


// add listner to checkboxes
function addListner(b) {
    b.addEventListener("click", () => {
        // switch off
        if (b.innerHTML == '') {
            let box = b.parentNode;
            box.querySelector('.line').style.display = 'block';
            
            b.innerHTML = '✓';

            if (mode)
            {
                box.querySelector('.info').style.color = "grey";
                b.style.backgroundColor = "#c394ff";
            }
            else
            {
                box.querySelector('.info').style.color = "grey";
                b.style.backgroundColor = "#202020";
            }
        }
        // switch on
        else {
            let box = b.parentNode;
            box.querySelector('.line').style.display = 'none';
            
            b.innerHTML = '';
            
            if (mode)
            {
                box.querySelector('.info').style.color = "black";
                b.style.backgroundColor = "white";
            }
            else
            {
                box.querySelector('.info').style.color = "white";
                b.style.backgroundColor = "#202020";
            }
        }
    })
}


// delete note
function addDelListner(b)
{
    b.addEventListener('click', ()=>{
        let box = b.parentNode;
        box.remove();
    })
}

// create notes
function addTask(str)
{
    let cont = document.querySelector(".container")
    
    let box = document.createElement("div");
    box.setAttribute('class', 'task');
    
    let btn = document.createElement('button');
    btn.setAttribute('class', 'checkbox');
    box.appendChild(btn);
    
    let inp = document.createElement('input');
    inp.setAttribute('class', 'info');
    inp.setAttribute('type', 'text');
    inp.value = str;
    box.appendChild(inp);

    let line = document.createElement('div');
    line.setAttribute("class", 'line');
    box.appendChild(line);

    let delbtn = document.createElement('button');
    delbtn.setAttribute("class", 'deltask');
    delbtn.innerHTML = 'X'
    box.appendChild(delbtn);
    
    // box.innerHTML = "djfnjsdn"
    
    cont.appendChild(box);
    addListner(btn)
    addDelListner(delbtn)

}

// create new notes
let newTask = document.querySelector(".new-task");

newTask.addEventListener("keydown", (event)=>{
    if(event.key === 'Return' || event.key === 'Enter')
    {
        if(newTask.value != "")
        {

            addTask(newTask.value);
            newTask.value = ""
        }
    }
});



// dark mode
let darkSwitch = document.querySelector('.dark-mode');

darkSwitch.addEventListener('click', ()=>{

    console.log(darkSwitch)
    let a = darkSwitch.getElementsByTagName('img')[0];
    // console.log(a.src)
    if(mode)
    {
        // console.log('if')
        a.src = "assests/moon.png"
        // console.log(a.src)
    }
    else
    {
        // console.log('else')
        a.src = "assests/sun.png"
        // console.log(a.src)
    } 




    let b = document.querySelector('.page');
    if(mode)
        b.style.backgroundColor = '#202020';
    else
        b.style.backgroundColor = 'white';



    
    let heading = document.querySelector('.heading');
    if(mode)
        heading.style.color = 'white';
    else
        heading.style.color = 'black';


    let infos = document.querySelectorAll('.info');
    Array.from(infos).forEach((info)=>{

        if(mode)
        {
            info.style.color = "white"
            info.style.backgroundColor = '#202020';
        }
        else
        {
            info.style.color = "black"
            info.style.backgroundColor = 'white';
        }
    })


    let boxes = document.querySelectorAll('.checkbox');
    Array.from(boxes).forEach((box)=>{

        if(mode)
            box.style.backgroundColor = '#202020';
        else
            box.style.backgroundColor = 'white';
    })


    let delboxes = document.querySelectorAll('.deltask');
    Array.from(delboxes).forEach((box)=>{

        if(mode)
        {
            box.style.color = "white";
            box.style.backgroundColor = '#202020';
        }
        else
        {
            box.style.color = "black";
            box.style.backgroundColor = 'white';
        }
    })







    let buttons = document.querySelectorAll('.checkbox');
    Array.from(buttons).forEach((button)=>{
        
        if(button.innerHTML != "")
        {
            let i = button.parentElement.querySelector('.info');

            if(mode)
            {
                button.style.color = "white";
                button.style.backgroundColor = '#202020';
                
                i.style.color = 'grey'; 
            }
            else
            {
                button.style.color = "black";
                button.style.backgroundColor = '#c394ff';

                i.style.color = 'grey';
            }
        }
    })

    // remove this
    // let info = document.querySelectorAll('.info');
    // Array.from(info).forEach((i)=>{

    //     if(mode)
    //     {
    //         i.style.color = "white"
    //         i.style.backgroundColor = '#202020';
    //     }
    //     else
    //     {
    //         i.style.color = "black"
    //         i.style.backgroundColor = 'white';
    //     }
    // })

    // let tasks = document.querySelectorAll('.task');
    // Array.from(buttons).forEach((task)=>{

    //     let checkbox = task.querySelector('.checkbox');
    //     let info = task.querySelector('.info');
    //     let delbtn = task.querySelector('.deltask');
        
        
    //     if(mode)
    //     {
    //         // info
    //         info.style.color = "white"
    //         info.style.backgroundColor = '#202020';

    //         // delete button
    //         delbtn.style.color = "white";
    //         delbtn.style.backgroundColor = '#202020';
            
    //         // checkbox
    //         if(checkbox.innerHTML != "")
    //         {
    //             button.style.color = "white";
    //             button.style.backgroundColor = '#202020';
    //         }
    //         else
    //             box.style.backgroundColor = '#202020';

    //         // cancel line

            
    //     }
    //     else
    //     {
    //         // info
    //         info.style.color = "black"
    //         info.style.backgroundColor = 'white';

    //         // delete button
    //         delbtn.style.color = "black";
    //         delbtn.style.backgroundColor = 'white';

    //         // checkbox
    //         if(checkbox.innerHTML != "")
    //         {
    //             button.style.color = "black";
    //             button.style.backgroundColor = '#c394ff';
    //         }
    //         else 
    //             box.style.backgroundColor = 'white';

    //         // cancel line
    //     }

    // })




    mode = !mode

})

addTask('Features: ')
addTask('Add task')
addTask('Delete task')
addTask('Check or Uncheck a task')
addTask('dark mode')
addTask('No limiit on number of tasks')

newTask.focus();
