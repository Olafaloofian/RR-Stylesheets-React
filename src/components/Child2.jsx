import Grandchild2 from "./Grandchild2"

function Child2(props) {

    const containerStyle = {
        height: "30vh",
        width: "50vh",
        backgroundColor: "beige",
        margin: "0 auto",
        border: "1px solid green"
    }

    const alternateGrandchildStyle = {
        ...props.stylesheet,
        backgroundColor: "yellow"
    }

    return (
        <div style={containerStyle}>
            Child 2
            <Grandchild2 stylesheet={alternateGrandchildStyle}/>
        </div>
    )
}

export default Child2