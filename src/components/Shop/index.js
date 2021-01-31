import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Shop = () => {
   
    return (
        <div>
            {/* <h1 className={styles.shopPageTitle}>Shop Page</h1>
           <div className={styles.container}>
                <form onSubmit={handleOnSubmit} className={styles.filterOptions}>
                    <label>Buscar Película</label>
                    <input type="text" value={searchValue} onChange={e=>setSearchValue(e.target.value)}></input>
                    <button type="submit">Buscar</button>
                </form>

                <div className={styles.results}>
                    {state.loading && (<h1>Loading...</h1>)}
                    {state.error && (<h1>{state.error}</h1>)}
                    {state.data &&  (<div className={styles.shopItems}>
                        {items.map(item => <ShopItem key={item.imdbID} {...item} />)}
                    </div>)}
                </div>
           </div> */}
        </div>
    )
}

Shop.propTypes = {

}

export default Shop
