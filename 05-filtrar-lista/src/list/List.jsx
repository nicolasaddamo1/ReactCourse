import ListView from "./ListView";
import frameworksList from './items.js'
function List() {
    return (
        <div className="list">
            <ListView elements={frameworksList} />
        </div>
    )
}
export default List;