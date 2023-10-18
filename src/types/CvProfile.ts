import {Education} from '@/types/Education';

export class CvProfile {
    constructor(
        public cvProfileID: number = 0,
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public address: string = '',
        public linkedinUrl: string = '',
        public githubUrl: string = '',
        public bio: string = '',
        public profilePictureUrl: string = '',
        public educations: Education[] = []
    ) {}
}
