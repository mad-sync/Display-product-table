import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({products}) => {

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className='p-40'>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  )
}

export default FilterableProductTable