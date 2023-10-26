import {Technology} from '@/types/Technology';

export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    projectUrl: string;
    themeColor: string;
    image: string;
    technologiesUsed: Technology[];
    cvProfileID: number;
}

