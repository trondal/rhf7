import { Button, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { INeed, IProject, IRequirement } from './lib/Interfaces';
import RequirementForm from './RequirementForm';

interface IProps {
  project: IProject;
  selected: number;
}
const Requirement = ({ project, selected }: IProps) => {
  const values = project.needs[selected];
  const methods = useForm<INeed>({
    defaultValues: values
  });

  // console.log(project.needs[selected].requirements);

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: `requirements`
  });

  console.log(fields);

  /* useEffect(() => {
    methods.reset(values);
  }, [methods, values]); */

  const render = (v: any) => {
    console.log(v);
  };

  return (
    <div>
      <Controller
        render={({ field }) => <TextField size="small" {...field} />}
        name="id"
        control={methods.control}
      />
      <Controller
        render={({ field }) => <TextField size="small" {...field} />}
        name="name"
        control={methods.control}
      />
      <Controller
        render={({ field }) => <TextField size="small" {...field} />}
        name="type"
        control={methods.control}
      />
      {fields.map((item, index) => {
        return (
          <div key={index}>
            <RequirementForm
              selected={selected}
              requirementIndex={index}
              project={project}
            />
          </div>
        );
      })}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          project.needs[selected].requirements.push({
            name: 'append',
            type: 'requirement',
            variants: []
          });
          // append({ name: 'append', type: 'requirement', variants: [] })
        }}
      >
        Append Requirement
      </Button>
    </div>
  );
};

export default Requirement;
