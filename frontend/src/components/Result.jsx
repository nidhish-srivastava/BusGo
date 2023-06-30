import React from 'react'

function Result({filteredArray,from,to,date}) {
  return (
        <div className="result-container">
          {filteredArray.length==0 && <p>No buses found!!!</p>  }
        {filteredArray.map((e, i) => {
          // The catch here is,we need to create an array where the filtered objects are inserted
          return (
            <div className="result-card">
              <h2>From : {from}</h2>
              <h2>To : {to}</h2>
              <h2>Brand : {e.brand}</h2>
              <h2>Price :{e.price}</h2>
              <h2>Date : {date}</h2>
            </div>
          );
        })}
      </div>
  )
}

export default Result