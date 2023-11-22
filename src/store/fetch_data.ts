import {onMounted, ref} from 'vue';
import {defineStore} from 'pinia';
import axios from 'axios';
import {CvProfile} from '@/types/CvProfile';
import {Education} from '@/types/Education';

export const useFetchDataStore = defineStore('fetchData', () => {
    /*
    Store to fetch data while the welcome animation is on.
    This will help loading of the page - the AboutMe component
    will have necessary data in time.
    */

    const loading = ref<boolean>(false);
    const cvProfile = ref<CvProfile>(new CvProfile());

    const fetchCvProfile = async () => {
        loading.value = true;
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/cv-profiles/1`)
            cvProfile.value.cvProfileID = data.cv_profile_id;
            cvProfile.value.name = data.name;
            cvProfile.value.email = data.email;
            cvProfile.value.phone = data.phone;
            cvProfile.value.address = data.address;
            cvProfile.value.bio = data.bio;
            cvProfile.value.linkedinUrl = data.linkedin_url;
            cvProfile.value.githubUrl = data.github_url;
            cvProfile.value.profilePictureUrl = data.profile_picture;

            // Sort education array by start date in descending order (latest first)
            data.education.sort((a: any, b: any) => {
                const date1 = new Date(a.start_date);
                const date2 = new Date(b.start_date);
                return date2.getTime() - date1.getTime();
            });

            for (const eduData of data.education) {
                const education: Education = {
                    id: eduData.id,
                    institution: eduData.institution,
                    degree: eduData.degree,
                    startDate: eduData.start_date,
                    endDate: eduData.end_date,
                    cvProfileID: eduData.cv_profile_id,
                };
                cvProfile.value.educations.push(education);
            }
        } catch (e) {
            console.error(e)
        }
        loading.value = false;
    }

    return {
        loading,
        cvProfile,
        fetchCvProfile,
    }
});
