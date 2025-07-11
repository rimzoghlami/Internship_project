import { Workshop } from "./workshop.model";



export interface Role {
    id: number;
    name: string;
  }

  export interface Skill {
    id: number;
    name: string;
  }
  
export interface User {
    id: number;
    name: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    birthdate: Date;
    picture: string;
    description: string;
    score: number;
    createdAt: Date;
    workshops: Workshop[];  // Assume Workshop is another defined interface
    skills?: Skill[];
    roles?: Role[];
    // Additional properties can be added as needed
}
