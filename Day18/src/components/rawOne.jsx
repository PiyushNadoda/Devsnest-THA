import BlackBox from "./blackBox";
import WhiteBox from "./whiteBox";

function RawOne({raw}){

    const boxs = [];
    for (let index = 0; index < 8; index++){
    (index%2 === 0) ? boxs.push(<BlackBox/>) : boxs.push(<WhiteBox/>)};

    return(
        <div className={ raw === 'one' ? 'raw' : 'rraw' }>
            {boxs}
        </div>
    )
}

export default RawOne;