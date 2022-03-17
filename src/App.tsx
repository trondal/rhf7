import * as React from 'react';
import { IProject } from './lib/Interfaces';
import Requirement from './Requirement';
import Sidebar from './Sidebar';

function App() {
  const [selected, setSelected] = React.useState(1);

  const project: IProject = {
    name: 'Tronds project',
    needs: [
      { id: '1', name: 'need 1', type: 'need', requirements: [] },
      {
        id: '2',
        name: 'need 2',
        type: 'need',
        requirements: [
          {
            name: 'requirement 1',
            type: 'requirement',
            variants: [
              {
                name: 'Variant 1',
                type: 'variant',
                questions: [
                  {
                    name: 'Question 1'
                  }
                ]
              }
            ]
          },
          {
            name: 'requirement 2',
            type: 'requirement',
            variants: [
              {
                name: 'Variant 2',
                type: 'variant',
                questions: [
                  {
                    name: 'Question 2'
                  }
                ]
              }
            ]
          }
        ]
      },
      { id: '3', name: 'need 3', type: 'need', requirements: [] }
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
      >
        {selected !== -1 && (
          <Requirement selected={selected} project={project} />
        )}
      </div>
      <code>{selected}</code>
    </div>
  );
}

export default App;
