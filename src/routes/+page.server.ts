import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { portfolioData } from '$lib/components/data'; // ✅ Import portfolio data
import type { PortfolioData } from '$lib/components/types';

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
        console.log(name)
        console.log(message)
        console.log(email)
        // 🔥 Basic validation
        if (!name || !email || !message) {
            return fail(400, { error: 'All fields are required' });
        }

        // 🔥 Email validation (basic)
        if (!email.includes('@')) {
            return fail(400, { error: 'Invalid email address' });
        }

        // 📨 Here, you could send an email or store in a database
        console.log('✅ Form Submitted:', { name, email, message });

        // Return success message
        return { success: true, message: 'Message sent successfully!' };
    }
};
