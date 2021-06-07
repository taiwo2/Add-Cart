import React from 'react'
import ItemCard from './ItemCard'
import data from './data'
function Home() {
  return (
    <>
      <h1 className='text-center mt-3'>All Items</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {data.productionData.map((item, index) => {
              return (
                <ItemCard img={item.img} 
                title={item.title}  
                price={item.price} 
                desc={item.desc}  
                key={index}
                item={item} />
              )
            })}
          </div>
        </section>   
       

    </>
  )
}

export default Home
