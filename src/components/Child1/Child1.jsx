import "./Child1.css"
import Grandchild1 from "../Grandchild1"
import Grandchild2 from "../Grandchild2"

function Child1(props) {
    return (
        <div className="big rainbow spin">
            <h1 style={{color: "white"}}>Child 1</h1>
            <Grandchild1 stylesheet={props.stylesheet}/>
            <Grandchild2 stylesheet={props.stylesheet} />
        </div>
    )
}

export default Child1