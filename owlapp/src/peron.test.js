import React from 'react';
import ReactDOM from 'react-dom';
// import Person from './participants/person.js'


function Person(props) {
    return (
      <div className='Person'>
          
        <li>{props.name}
        <img src={props.avatar} alt="avatar" />
        <span {...props.inSession} />
        <span {...props.onStage} />
        </li>
      </div>
    )
  }


describe('<Person />', () => {
    it('this should map through our array', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Person 
          name="shoezzz"
          avatar="awebsite"
          inSession={true}
          onStage={false}

        />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})