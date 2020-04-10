import React from 'react';
import {AppContext,EventContext} from '../../AppContexts';

const SearchInput = () => {
    const appContext = React.useContext(AppContext);
    const eventContext = React.useContext(EventContext);

    console.log(AppContext);
    return (
     <input
     value={appContext.searchText}
     onChange={eventContext.onSearchInputChange}
     />
    )
}

export default SearchInput;
