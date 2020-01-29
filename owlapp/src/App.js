
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <main className='App'>
      {participants.map(el => Person({
  name: el.name,
  avatar: el.avatar,
  inSession: el.inSession,
  onStage: el.onStage
}))}
    </main>
  );
}

export default App;







const participants = [
  {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  },
  {
      id: 2,
      name: 'Caty Flucker',
      avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
  {
      id: 4,
      name: 'Frank Runciman',
      avatar:
          'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 5,
      name: 'Ashla Attwool',
      avatar:
          'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }
];


function Person(props) {
  return (
    <div className='Person'>
        
      <li>{props.name}
      <img src={props.avatar} alt="avatar" />
      <span {...props.inSession} />
      <span {...props.onStage}/>
      </li>
    </div>
  )
}



console.log(participants.map(el => Person({
  name: el.name,
  avatar: el.avatar,
  inSession: el.inSession,
  onStage: el.onStage
})))