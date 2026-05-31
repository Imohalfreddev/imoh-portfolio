export async function POST(req) {
    try {
        // Grab the incoming data from your frontend
        const json = await req.json();
        
        // Forward the data to your Formspree endpoint
        const formspreeResponse = await fetch('https://formspree.io/f/xvzlywoq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(json),
        });

        // Parse the response from Formspree
        const data = await formspreeResponse.json();

        if (formspreeResponse.ok) {
            return Response.json(data);
        } else {
            return Response.json({ error: data }, { status: formspreeResponse.status });
        }
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}