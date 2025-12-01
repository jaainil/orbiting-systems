import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const turnstileToken = data['cf-turnstile-response'];

        if (!turnstileToken) {
            return new Response(JSON.stringify({ message: 'Turnstile token missing' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Verify Turnstile token
        const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secret: import.meta.env.TURNSTILE_SECRET_KEY,
                response: turnstileToken,
            }),
        });

        const verifyResult = await verifyResponse.json();

        if (!verifyResult.success) {
            return new Response(JSON.stringify({ message: 'Turnstile verification failed' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Forward to Webhook
        const webhookResponse = await fetch(import.meta.env.CALCULATOR_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!webhookResponse.ok) {
            const errorText = await webhookResponse.text();
            console.error('Webhook error:', errorText);
            return new Response(JSON.stringify({ message: 'Failed to submit project details' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ message: 'Project details submitted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('API error:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
