import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
      <FilteredFruitList
        fruit = {props.fruit}
        filter = {props.currentFilter}
      />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: (e) => {
    console.log('Need filter callback for FruitBasket!');
  }
}

export default FruitBasket;
