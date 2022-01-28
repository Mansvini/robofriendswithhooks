import React, {useState, useEffect} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>setRobots(users));
  },[]);

  const onSearchChange= (event)=>{
    setSearchfield(event.target.value);
  }
  
  const filteredRobots= robots.filter(robot=> {
    return robot.name.toLowerCase().includes(searchfield);
  });
  return !robots.length? 
    <h1>Loading...</h1>:
    (
      <div>
         <h1 className='f1'>RoboFriends</h1>  
         <SearchBox searchchange={onSearchChange}/>
         <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots}/>
          </ErrorBoundry>
         </Scroll> 
      </div>
    )
}

export default App;