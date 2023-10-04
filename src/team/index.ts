import { API } from '@Minecart/api';
import { Team } from './types';

export const team = {
    async all() {
        try {
            const team = await API('/shop/team');

            return team as Team[];
        } catch (error: any) {
            console.error('Error fetching team:', error.message);
            return [];
        }
    }
};