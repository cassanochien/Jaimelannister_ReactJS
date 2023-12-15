import React from "react";

function Evaluate(props){
    return(
        <>
            <div className="Evaluate">
                <div className="item11">
                    <div className="fs-match-card">
                        <div className="fs-match-card-icon">
                            <img src={props.imageEvaluate} alt=""/>
                        </div>
                        <div className="fs-match-card-detail">
                            <div className="fs-match-card-title">{props.title}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evaluate;