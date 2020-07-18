import React from 'react';

function Card(props) {
    return (
        <div className='row' style={{ margin: '40px 0px 40px 0px' }}>
            {props.data.results.map((item) => {
                return <div key={Math.random()} className='col-lg-3 col-md-4 col-sm-6 col-xs-12' style={{ margin: '10px 0px 10px 0px' }}>
                    <div className="card" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Card;
