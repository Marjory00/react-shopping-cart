//GroceryList.js
// Contains a list of all items. Takes the items as a prop and display in ordered list.

import React from "react";
import GroceryItem from "./GroceryItems";

const GroceryList = ({ items, removeItem }) => {
    return (
    <div className="grid-container ">
     <ol>
     {items.map((item) => (
     <li>
        <GroceryItem key={item} item={item} removeItem={removeItem} />
     </li>
     ))}
     </ol>
     </div>
     );
};

export default GroceryList;