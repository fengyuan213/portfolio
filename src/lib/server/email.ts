import { Resend } from 'resend';
import { RESEND_API_KEY, 
        EMAIL_FROM,
        EMAIL_TO} from '$env/static/private';

// Initialize Resend instance
export const resend = new Resend(RESEND_API_KEY);

// Email sending utility function
export async function sendEmail({ name, email, message }: {
    name: string;   
    email: string;
    message: string;
}) {
    return resend.emails.send({
        from: EMAIL_FROM,  // Resend's shared domain
        to: EMAIL_TO,
        replyTo: email, // Add replyTo for responses
        subject: `New Message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`
    });
} 