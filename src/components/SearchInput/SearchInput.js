import React from 'react';
import {AppContext,EventContext} from '../../AppContexts';
import './style.css'

const SearchInput = () => {
    const appContext = React.useContext(AppContext);
    const eventContext = React.useContext(EventContext);

    console.log(AppContext);
    return (
    <div className='container'>
     <input
     value={appContext.searchText}
     onChange={eventContext.onSearchInputChange}
     className='form-control form-control-lg' type='text' 
     placeholder='Search By Employee Name' 
     />
     </div>
    )
}

export default SearchInput;

{/* <input
value={appContext.searchText}
onChange={eventContext.onSearchInputChange}
/> */}
