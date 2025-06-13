'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
	useEffect(() => {
		// Append n8n chat stylesheet
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
		document.head.appendChild(link);

		// Inject custom colors
		const style = document.createElement('style');
		style.innerHTML = `
			:root {
				--chat--color-primary: #1E90FF; /* blue */
				--chat--color-secondary: #B2BEB5; /* ash */
				--chat--color-white: #ffffff;
				--chat--color-dark: #101330;
			}
		`;
		document.head.appendChild(style);

		// Add n8n chat script dynamically
		const script = document.createElement('script');
		script.type = 'module';
		script.innerHTML = `
			import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

			createChat({
				webhookUrl: 'https://vwede.app.n8n.cloud/webhook/429111ab-c7bf-49dc-a812-cc1d3f2e2b15/chat',
				webhookConfig: {
					method: 'POST',
					headers: {
						Authorization: 'Basic ' + btoa('vwede:vwede'),
					},
				},
				initialMessages: ['Chat with TehilJem bot support'],
				mode: 'window',
				defaultLanguage: 'en',
			});
		`;
		document.body.appendChild(script);
	}, []);

	return null; // Nothing rendered
}