import React, {useState} from 'react'
 
 
 
function MenuForm({addDrinkToState}) {
 
   const [ name, setName ] = useState('')
   const [ image, setImage ] = useState('')
   const [ description, setDescription ] = useState('')
   const [ price, setPrice ] = useState('')
 
 
 
   const handleNameChange= (e) => {
       return(
           setName(e.target.value)
       )
   }
   const handleImageChange= (e) => {
       return(
           setImage(e.target.value)
       )
   }
   const handleDescriptionChange= (e) => {
       return(
           setDescription(e.target.value)
       )
   }
   const handlePriceChange= (e) => {
    return(
        setPrice(e.target.value)
    )
}

const handleSubmit= (e) => {
    e.preventDefault();

    let newDrink = {
        name: name, 
        image: image, 
        description: description, 
        price: price}


    fetch(' http://localhost:3001/coffee', {
        method: 'POST',
        header: { "Content-Type" : "application/json" },
        body: JSON.stringify(newDrink)
    })
    .then(resp => resp.json())
    .then ( () => {addDrinkToState(newDrink) 
    })

}


return(
    <div className="new-drink-form" >
        <h2>Customize A Drink!</h2>
        <form onSubmit = {handleSubmit}>
        <input className='nameinput' onChange={ handleNameChange } type="text" name="name" placeholder="Drink name" />
        <input className='imageinput' onChange={ handleImageChange } type="text" name="image" placeholder="Image URL" />
        <input className='descriptioninput' onChange={ handleDescriptionChange } type="text" name="description" placeholder="Description" />
        <input className='priceinput' onChange={ handlePriceChange } type="number" name="price" step="0.01" placeholder="Price" />
        <button className="learn-more">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Add Drink!</span>
        </button>
        </form>
  </div>
   )
}
 
export default MenuForm;


