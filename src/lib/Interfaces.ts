export interface Project {
  name: string;
  needs: Need[];
}

interface Need {
  name: string;
  requirements: Requirement[];
}

interface Requirement {
  name: string;
  variants: Variant[];
}

interface Variant {
  name: string;
  questions: Question[];
}

interface Question {
  name: string;
}
