import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { IProject, IRequirement, IVariant } from './lib/Interfaces';

interface IProps {
  requirementIndex: number;
  selected: number;
  project: IProject;
}

const RequirementForm = ({ project, selected, requirementIndex }: IProps) => {
  const value: IRequirement =
    project.needs[selected].requirements[requirementIndex];

  const methods2 = useForm<IRequirement>({
    defaultValues: value
  });

  const { fields, append } = useFieldArray({
    control: methods2.control,
    name: `variants`
  });

  const saveValues = (v: any) => {
    console.log('saved in  requirementForm');
    console.log(v);
  };

  useEffect(() => {
    methods2.reset(value);
  }, [methods2, value]);

  return (
    <form onSubmit={methods2.handleSubmit(saveValues)}>
      <Controller
        render={({ field }) => <TextField {...field} />}
        name="name"
        control={methods2.control}
      />
      <Controller
        render={({ field }) => <TextField {...field} />}
        name="type"
        control={methods2.control}
      />
      {/* <Variants /> */}
      <Button variant="contained" color="secondary" type="submit">
        Lagre
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          append({ name: 'requirement', type: 'variant', questions: [] })
        }
      >
        Append
      </Button>
    </form>
  );
};

export default RequirementForm;
