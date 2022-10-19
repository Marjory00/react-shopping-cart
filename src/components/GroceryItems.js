//GroceryItems.js
//Used to display the item. Presentational component that takes
//the item as a prop and displays it.

import React from 'react';
const GroceryItem = ({ item, removeItem }) => {
    return (
        <div>
            <span>{item}</span>
        <button className="redButton" onClick={() => 
            removeItem(item)}>Delete</button>
        </div>
    );
};
export default GroceryItem;