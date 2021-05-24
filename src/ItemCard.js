import React from 'react'

function ItemCard(props) {
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mx-4'>
      <div class='card p-0 overflow-hidden h-100 show'>
        <img src="{props.img}" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <button class="btn btn-success">Add cart</button>
          </div>
      </div>
    </div>
   )
}

export default ItemCard
