import React from "react";

const BLogCard = (props) => {
    console.log(props);

    return(
        <div className="BlogCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default  BLogCard;