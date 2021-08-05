import RawOne from "./rawOne";

function Chess(){

    
    const raws = [];
    for (let index = 0; index < 8; index++){
    (index%2 === 0) ? raws.push(<RawOne raw='one'/>) : raws.push(<RawOne raw='two'/> )};

    
    return(
      <div className="chess-board">
      {raws}
    </div>
    )
}

export default Chess;