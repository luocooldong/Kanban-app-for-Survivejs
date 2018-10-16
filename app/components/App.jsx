import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions.js'

import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (
    <div>
      <button className="add-lane" onClick={addLane}>+</button>
      <Lanes lanes={lanes} />
    </div>
  );
};


export default compose(
  DragDropContext(HTML5Backend),
  connect(
    ({lanes}) => ({lanes}),
    {LaneActions}
  )
)(App)