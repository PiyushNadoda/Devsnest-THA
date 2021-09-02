import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './StorySection.scss'
import { rootReducerType } from '../../../../reducers';
import { fetchProfiles } from '../../../../actions';

const StorySection = () => {
 const dispatch = useDispatch();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() : any =>{ dispatch(fetchProfiles());}, [])
 const data : any = useSelector<any>( (state : rootReducerType) => state.data)
    return(
        <>
        <div className="story-sction">


            {
                [...Array(10)].map((item, index) => 

            { 
                return(
                data.map((user : any, index : number) => {
                    return(
                        <div key={index} className="story-card">
                            <img src={user.profilePicture} alt="" />
                             <p className="username"> {user.username } </p>
                        </div>
                    )
                }))
            }
                )}


        </div>
        </>
    )
}

export default StorySection;