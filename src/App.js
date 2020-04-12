import React, { useState } from 'react';
import Header from './components/Header/Header.js'
import Table from './components/Table/Table.js'
import SearchInput from './components/SearchInput/SearchInput.js'
import { AppContext, EventContext } from './AppContexts.js';

const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchText(event.currentTarget.value);
  }

  const appContext = {
    searchText,
  }

  const eventContext = {
    onSearchInputChange: handleSearchInputChange,
  }

  return (
    <AppContext.Provider value={appContext}>
      <EventContext.Provider value={eventContext}>
        <div className="App">
          <Header />
          <SearchInput />
          <Table />
        </div>
      </EventContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
