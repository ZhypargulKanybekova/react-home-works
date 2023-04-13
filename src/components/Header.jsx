
import "./Header.css"


export const Header = ({openModalHandler}) => {
  
  return (
    <div className='header'>
        <h1 className='firstTitle'>Favorite Movie</h1>
        <button onClick={openModalHandler} className='button'>ADD MOVIE</button>
        
       
    </div>

    
    
  )
}
