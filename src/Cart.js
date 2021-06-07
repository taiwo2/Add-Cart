import React from 'react'
import {useCart} from 'react-use-cart'
// import data from './data'
const  Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <h1 className='text-center'>Your cart is Empty</h1>
    return (
        
          <div className='row justify-content-center'>
            <section className='py-4 container'>
            <div className='col-12'>
              <h5>Cart {totalUniqueItems} total items: {totalItems}</h5>
              <table>
                  <tbody>
                      {items.map((item, index) => {
                          return (
                              <tr key={index}>
                                  <td>
                                      <img src={item.img} alt='......' style={{height:'6rem'}} />
                                  </td>
                                  <td>{item.title}</td>
                                  <td>{item.price}</td>
                                  <td> Quantitiy: {item.quantity}</td>
                                  <td>
                                      <button 
                                      className='btn btn-info ms-2'
                                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                      <button 
                                      className='btn btn-info ms-2'
                                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                      > +</button>
                                      <button 
                                      className='btn btn-danger ms-2'
                                      onClick={() => removeItem()}>Remove items</button>
                                  </td>

                              </tr>
                          )
                      })}
                  </tbody>
              </table>
            </div>
            </section>
          </div>
        
        
    )
}

export default Cart
