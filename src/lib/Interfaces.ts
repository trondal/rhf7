import { string } from 'yup';

export interface IProject {
  name: string;
  needs: INeed[];
}

export interface INeed {
  id: string;
  name: string;
  type: string;
  requirements: IRequirement[];
}

export interface IRequirement {
  name: string;
  variants: IVariant[];
  type: string;
}

export interface IVariant {
  name: string;
  type: string;
  questions: IQuestion[];
}

export interface IQuestion {
  name: string;
}
