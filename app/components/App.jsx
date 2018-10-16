import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

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

export default connect(({lanes}) => ({
  lanes
}), {
  LaneActions
})(App)



// class App extends React.Component {
//   render() {
//     const {notes} = this.props;
//     return (
//       <div>
//         <button className="add-note" onClick={this.addNote}>+</button>
//         <Notes
//           notes={notes}
//           onNoteClick={this.activateNoteEdit}
//           onEdit={this.editNote}
//           onDelete={this.deleteNote}
//           />
//       </div>
//     );
//   }

//   addNote = () => {
//     // It would be possible to write this in an imperative style.
//     // I.e., through `this.state.notes.push` and then
//     // `this.setState({notes: this.state.notes})` to commit.
//     //
//     // I tend to favor functional style whenever that makes sense.
//     // Even though it might take more code sometimes, I feel
//     // the benefits (easy to reason about, no side effects)
//     // more than make up for it.
//     //
//     // Libraries, such as Immutable.js, go a notch further.
//     this.props.NoteActions.create({
//       id: uuid.v4(),
//       task: 'New task'
//     });
//   }

//   deleteNote = (id, e) => {
//     // Avoid bubbling to edit
//     e.stopPropagation();
//     this.props.NoteActions.delete(id);
//   }

//   activateNoteEdit = (id) => {
//     this.props.NoteActions.update({id, editing: true});
//   }

//   editNote = (id, task) => {
//     this.props.NoteActions.update({id, task, editing: false});
//   }
// }

// export default connect(({notes}) => ({
//   notes
// }), {
//   NoteActions
// })(App)