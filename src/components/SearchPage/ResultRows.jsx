import React from 'react'

const ResultRows = (props) => {
  // console.log(props.item)
  const { results } = props
  return (

    <div className="results">
				{results.length > 0 ? (
					results.map((item, idx) => {
						return (
              <div className="result" key={idx}>
                <div className="row">
                  <div className="title"><a href={`https://taxnotes.com${item.urls[item.product_name]}`} target="_blank" rel="noreferrer">{item.title}</a></div>  
                  <div className="date">{item.date}</div>
                </div>
                <div className="abstract">{item.abstract}</div>
              </div>
            )
					})
				):(
					null
				)}
			</div>
    
  )
}

export default ResultRows;