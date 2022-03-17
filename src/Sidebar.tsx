import { DevTool } from '@hookform/devtools';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { IProject } from './lib/Interfaces';

interface IProps {
  project: IProject;
  setSelected: (n: number) => void;
}

const Sidebar = ({ project, setSelected }: IProps) => {
  const methods = useForm<IProject>({
    defaultValues: project
  });

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: `needs`
  });

  return (
    <div>
      <List component="nav">
        {fields.map((n, i) => (
          <ListItemButton
            sx={{ border: '1px solid black' }}
            key={n.name}
            onClick={() => setSelected(i)}
          >
            <ListItemText primary={n.name} />
          </ListItemButton>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={() =>
          append({
            id: '4',
            name: 'ASD',
            type: 'need',
            requirements: [
              {
                name: 'req4',
                variants: [],
                type: 'variant'
              }
            ]
          })
        }
      >
        Append need (modal via ajax)
      </Button>
    </div>
  );
};

export default Sidebar;
