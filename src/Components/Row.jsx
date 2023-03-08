import React from 'react'


const Card = ({img}) => {
  return <img src={img} alt="cover"  className='card'/>
  
  
}


const Row = ({ title, arr=[], imgUrl }) => {
    return (
        <div className="row">
            <h2>{title}</h2>

            <div>

                {
                    arr.map((arrIndex, index) => ( // yahann pa jo arr map karwaana hai uska parameter phla aata hai
                        <Card key={index} img={`${imgUrl}/${arrIndex.poster_path}`}/>
                    ))
                }
                
                
             
            </div>
        </div>
    )
}

export default Row