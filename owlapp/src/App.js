
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <main className='App'>
      {/* {participants.map(el => Person({
  name: el.name,
  avatar: el.avatar,
  inSession: el.inSession,
  onStage: el.onStage
}))} */ Badges(participants.filter(el => el.inSession))}
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



// if (inSession === false) {
//   return <li className="red"></li>
// } else if(inSession === true) {
//   return <li className="green"></li>
// }

// participants.filter(el => el.onStage)


// function Person(props) {
//   return (
//     <div className='Person'>
        
//       <li>{props.name}
//       <img src={props.avatar} alt="avatar" />
//       <span {...props.inSession} />
//       <span {...props.onStage}/>
//       </li>
//     </div>
//   )
// }

function Person(props) {
  return (
    <li className='Person'>
      <img src={props.avatar} alt="avatar" />
      {props.inSession}
      {props.onStage}
      {props.name}
    </li>
  )
}

function Badges(props) {
  return (
      <ul className="persons">
          {props.map((person) => 
          <Person 
          key={person.id}
          name={person.name}
          avatar={person.avatar}
          inSession={person.inSession}
          onStage={person.onStage}
          />
          )}
          </ul>
  );
}

// console.log(Badges(participants))

// console.log(participants.map(el => Person({
//   name: el.name,
//   avatar: el.avatar,
//   inSession: el.inSession,
//   onStage: el.onStage
// })))