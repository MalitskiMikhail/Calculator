import React from 'react'
import { Greet } from './components/Greet'
import { Person } from './components/Person'

const App: React.FC = () => {
const personName = {
    first: 'Bruce',
    last:'Wayne',
}
    return (
      <div>
        <Greet name="Vishwas" messageCount={20} isLoggedIn={false}/>
      </div>
  );
};

export default App;