const btn = document.querySelector('#random-food')
const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
  el.addEventListener('click', deleteToEat)
})

btn.addEventListener('click', function(e) {
  fetch('/randomFood', {method: 'GET'})
  .then(res => {
    return res.json()
  })
  .then(data => {
    let foodKeys = []
    let eat = document.querySelector('.eat')

    for(let restaurant of data) {
    foodKeys.push(restaurant.food)
    }

    let uniqueFood = foodKeys.filter((value, index, arr) => {
      return arr.indexOf(value) === index
    })
    
    let pickRandomFood = uniqueFood[Math.floor(Math.random() * uniqueFood.length)]
    
    eat.innerHTML = `How about <span class="text-amber-600 font-semibold">${pickRandomFood}</span>?`
    eat.classList.add('text-xl')
    
  })
})

async function deleteToEat(){
  const toEatId = this.parentNode.dataset.id
  try{
      const response = await fetch('/deleteToEat', {
          method: 'delete',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              'toEatIdFromJSFile': toEatId
          })
      })
      const data = await response.json()
      console.log(data)
      location.reload()
  }catch(err){
      console.log(err)
  }
}