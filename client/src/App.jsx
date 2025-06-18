import { useState } from 'react';
import { PRODUCTS } from './constants/products';
import Header from './components/header/Header';

const App = () => {
  //estado para los filtros y el carrito

  const [filterActive, setFilterActive] = useState('Default');
  const filteredDesserts = filterDesserts(filterActive);

  const desserts = [...PRODUCTS];
  console.log(desserts);

  const [quantity, setQuantity] = useState(0);
  console.log(quantity);

  const isSpecial = quantity === 1;

  return (
    <>
      <Header filterActive={filterActive} setFilterActive={setFilterActive} />

      <main>
        {filteredDesserts.map(dessert => (
          <div key={dessert.id}>
            <picture>
              <source media='(min-width: 1020px)' srcSet={dessert.imgDesktop} />
              <source media='(min-width: 768px)' srcSet={dessert.imgTablet} />
              <source media='(min-width: 360px)' srcSet={dessert.imgMobile} />
              <img src={dessert.imgMobile} alt={dessert.alt} />
            </picture>
            <div>
              {!isSpecial && (
                <button onClick={() => addQuantity(quantity, setQuantity)}>
                  Add To Cart
                </button>
              )}
              {isSpecial && (
                <button
                  className='button'
                  onClick={event => console.log(event.target.value)}
                >
                  <img
                    // value='increment'
                    src='/assets/images/icon-increment-quantity.svg'
                    alt='increment icon'
                  />
                  +1-
                  <img
                    // value='decrement'
                    src='/assets/images/icon-decrement-quantity.svg'
                    alt='decrement icon'
                  />
                </button>
              )}
            </div>
            <span>{dessert.name}</span>
            <p>{dessert.title}</p>
            <span>{dessert.price}</span>
          </div>
        ))}
        <div>
          <h2>Your Cart</h2>
          <span>{quantity}</span>
        </div>
      </main>
    </>
  );
};

const filterDesserts = filter => {
  const productsCopy = [...PRODUCTS];
  if (filter === 'default') return productsCopy;
  if (filter === 'name')
    return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
  if (filter === 'price') return productsCopy.sort((a, b) => a.price - b.price);
  return productsCopy;
};

// onClick={() => substractQuantity(quantity, setQuantity)}
//en el event targe de la img del boton

const addQuantity = (quantity, setQuantity) => {
  setQuantity(quantity + 1);
};
const substractQuantity = (quantity, setQuantity) => {
  setQuantity(quantity - 1);
};

export default App;
