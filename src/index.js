document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')

  form.addEventListener('submit',(e)=>{
   
     e.preventDefault()
     
     buildMyTodo(e.target.new_task_description.value)
     form.reset()
  })     
  
  function buildMyTodo(todo){
  
  
  let p=document.createElement('p')
  
  
  p.textContent=`${todo}  `
  
  let btn = document.createElement('button')
  btn.textContent='Cancel'
  
  
 
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  }
  console.log(p)

  btn.addEventListener('click',(e)=>{
   e.target.parentNode.remove()
  })
  

});




  // })let form = document.querySelector('form')

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault()
  //   buuildToDo(e.target.new_task_description.value)
  //   form.reset()

  // function buildToDo(todo){
  //   let p = document.createElement('p')
  //   let btn = d0cument.createElement('button')
  //   btn.addEventListener('click',handleDelete)
  //   btn.textContent = 'Cancel'
  //   p.textContent = `${todo} `
  //   p.appendChild(btn)
  //   document.querySelector('#list').appendChild(p)
 
  // }
  //   function handleDelete(e){
  //    e.target.parentNode.remove()
  //   }

 

