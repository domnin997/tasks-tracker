import './appHeader.css';
import pencilLogo from '../../assets/img/pencil_logo.png';

function AppHeader () {
    return (
      <header className='app-header'>
        <div className='app-header_wrap'>
         <div className='logo'>
           <div className='logo__img-container'>
             <img className='logo__img'
                  src={pencilLogo}
                  alt='logoImg'/>
           </div>
           <div className='logo__text-container'>
             <h1 className='logo__text'>ЗАПИСАТОР</h1>
           </div>
         </div>
        </div>
      </header>
    )
}

export default AppHeader;