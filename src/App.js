import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  // const [{ user } , dispatch] = useStateValue();
  const user ="aman";
  return (
    //BEM naming convention
    
    <div className="app">
      
      { !user ? (<Login />):(
        <>
                <Header />

                <div className="app__body">
                   
                   <Sidebar/>
                   <Feed />
                   <Widgets />
                    
        
                </div>
        </>        
      )}
        


        {/* App Body */}
          
    </div>
  );
}

export default App;
