import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Project } from './lib/Interfaces';

interface IProps {
  project: Project;
  setSelected: (n: number) => void;
}

const Sidebar = ({ project, setSelected }: IProps) => {
  return (
    <List component="nav">
      {project.needs.map((n, i) => (
        <ListItemButton
          sx={{ border: '1px solid black' }}
          key={n.name}
          onClick={() => setSelected(i)}
        >
          <ListItemText primary={n.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default Sidebar;
