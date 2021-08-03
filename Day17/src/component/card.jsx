function Card({calory, food}){
   return(  <div className="container">
        <div className="card">
            <h1>{food || 'none' }</h1>
            <p>you have consumed {calory || '0'} cals today</p>
        </div>
    </div>)
}

export default Card;