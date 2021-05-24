import React from 'react'
import ItemCard from './ItemCard'

function Home() {
  return (
    <>
      <h1 className='text-center mt-3'>All Items</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
              <ItemCard img='' title='titlt' desc='desc' />
          </div>
        </section>   
    </>
  )
}

export default Home
