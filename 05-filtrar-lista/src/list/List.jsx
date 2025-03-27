import ListView from "./ListView";
import frameworksList from './items.js'
import { useState } from "react";
function List() {
    const [items, setItems] = useState(frameworksList);

    function functionFilterItems(searchPattern) {
        if (searchPattern === '') {
            setItems(frameworksList);
        } else {
            let newItems = filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    }
    function filterItemsBySearchPattern(searchPattern) {
        const filterItems = frameworksList.filter(item => item.toLowerCase().includes(searchPattern.toLowerCase()));
        return filterItems;
    }
    return (
        <div className="list">
            <ListView elements={items} functionFilterItems={functionFilterItems} />
        </div>
    )
}
export default List;