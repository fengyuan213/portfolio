import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { portfolioData } from '$lib/components/data'; // ✅ Import portfolio data
import type { PortfolioData } from '$lib/components/types';
import { sendEmail } from '$lib/server/email';

// Explicitly type the return value
export const load: PageServerLoad = async (): Promise<{ portfolioData: PortfolioData }> => {
	return { portfolioData }; // ✅ Make portfolioData available as a prop
};

export const actions: Actions = {
    contact: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const message = formData.get('message')?.toString().trim();
        
        // Basic validation
        if (!name || !email || !message) {
            return fail(400, { error: 'All fields are required' });
        }

        // Email validation (basic)
        if (!email.includes('@')) {
            return fail(400, { error: 'Invalid email address' });
        }
  
        try {
            console.log(name)
            
            console.log(email)
            
            console.log(message)
            const res = await sendEmail({ name, email, message });
            if(res.error){
                console.log(res.error)
                console.log(res.data)
                return fail(500, { error: 'Failed to send message. Please try again later.' });
            }
            return { success: true, message: 'Message sent successfully!' };
        } catch (error) {
            console.error('Error sending email:', error);
            return fail(500, { error: 'Failed to send message. Please try again later.' });
        }
    }
};
