//console.log('connected')
//targeting 
const inputName = document.getElementById('inputName');
const inputTxt = document.getElementById('inputTxt');
const submitBtn = document.getElementById('submitBtn');
const tweetCommentsOl = document.getElementById('tweetCommentsOl');
const massage = document.getElementById('massage');
const search = document.getElementById('search');


//get localStorage
let Memory = [];
//creat new list and show in display
function creatLi(Memorys) {
    if (Memorys.length > 0) {
        let li = '';
        massage.innerHTML = ``;
        Memorys.forEach(ele => {
            li = document.createElement('li');
            li.className = 'card my-3';
            li.id = `tweet-${ele.id}`
            li.innerHTML = `
            
          <div class="card-body">
          <h5 class="card-title heading-title"><span>${ele.id+1}</span> ${ele.name}</h5>
            <p class="card-text">${ele.text}</p>
            <button  class="btn btn-danger float-right deleteBtn">Delete</button>
           </div>
        `
            tweetCommentsOl.appendChild(li);
        });

    } else {
        massage.innerHTML = `<h4>No tweet to show!</h4>`;
    }
}
creatLi(Memory)

//catch name and tweet 

submitBtn.addEventListener('click', function () {

    if (inputName.value === '' || inputTxt.value === '') {
        alert('please fill the necessary input..');

    } else {
        
    let id;
    if (Memory.length === 0) {
        id = 0
    } else {
        id = Memory[Memory.length - 1].id + 1;
    }
        Memory.push({
            id,
            name: inputName.value,
            text: inputTxt.value
        })
        tweetCommentsOl.innerHTML = '';
        creatLi(Memory);
        inputName.value = '';
        inputTxt.value = '';
    };
})
//delete the tweet 

tweetCommentsOl.addEventListener('click', (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.parentElement.remove();
    }
    const id = parseInt(e.target.parentElement.parentElement.id.split("-")[1])
    let OhterLi = Memory.filter((ele) => {
        return ele.id != id;
    })
    Memory = OhterLi;
});

//search the tweet
search.addEventListener('keyup',function(e){
const searchValue = e.target.value.toLowerCase();
document.querySelectorAll('.heading-title').forEach((name) => {
    const Name = name.textContent.toLowerCase(); 
    console.log(Name)
    if(Name.includes(searchValue)){
        name.parentElement.parentElement.style.display = 'block';
        massage.innerHTML = ``;
    }else{
        name.parentElement.parentElement.style.display = 'none';
        massage.innerHTML = `<h4>No tweet to show!</h4>`;
    } 
})
 
})
