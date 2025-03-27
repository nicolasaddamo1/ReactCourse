import ListView from "./ListView";
import frameworksList from './items.js'
import { useState } from "react";
function List() {
    const [items, setItems] = useState(frameworksList);

    function filterItems(searchPattern) {
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
            <ListView elements={items} functionFilterItems={filterItems} />
        </div>
    )
}
export default List;