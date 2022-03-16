import * as React from 'react';
import { Project } from './lib/Interfaces';
import Sidebar from './Sidebar';

function App() {
  const [selected, setSelected] = React.useState(-1);

  const project: Project = {
    name: 'Tronds project',
    needs: [
      { name: 'need 1', requirements: [] },
      {
        name: 'need 2',
        requirements: [
          {
            name: 'requirement 1',
            variants: [
              {
                name: 'Variant 1',
                questions: [
                  {
                    name: 'Question 1'
                  }
                ]
              }
            ]
          }
        ]
      },
      { name: 'need 3', requirements: [] }
    ]
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{ backgroundColor: 'lightcoral', width: '25%', height: '95vh' }}
      >
        <Sidebar project={project} setSelected={setSelected} />
      </div>
      <div
        style={{ backgroundColor: 'lightgray', width: '70%', height: '95vh' }}
      ></div>
      <code>{selected}</code>
    </div>
  );
}

export default App;
