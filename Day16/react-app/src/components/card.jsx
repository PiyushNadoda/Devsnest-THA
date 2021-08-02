import image from './img1.jpg'

function Card(){

    function Meme(){
        return(
            <img className="jpg" src={image} alt=""></img>
        )
    }

    function Text(){
        return(
            <div>
                <h1> React </h1>
                <p> meme card with react app  </p>
            </div>
        )
    }

    return(
        <div className="card">
        <Meme />
        <Text />
        </div>
    )
}

export default Card;