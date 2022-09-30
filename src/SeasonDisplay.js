import SummerSeason from "./summer"
import WinterSeason from "./winter"
const Season = (lat,month)=>{
    if(month>2&&month<9){
        return lat>0? "summer":"winter"
        
    }
    else{
        return lat>0? "winter":"summer"
    }
    
}
const SeasonDisplay = (props)=>{
    const result = Season(props.lats,new Date().getMonth())
    return(
        <>

        {result==='winter'?<WinterSeason/>:<SummerSeason/>}


        </>
    )
}

export default SeasonDisplay