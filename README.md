# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

MORE INFO:

Sagittarius – AI Chat Assistant

Project Overview:
Sagittarius is a sleek, interactive AI chat assistant built with React and Vite. It allows users to ask questions, get quick insights, and explore various topics through an AI-powered conversational interface. The app features a modern responsive design with a sidebar, chat interface, and interactive suggestion cards for users to explore ideas or tasks quickly.

Key Features:

Interactive chat interface with live AI responses.

Suggestion cards for common prompts and ideas.

Responsive design optimized for desktop, tablet, and mobile screens.

Clear chat functionality for starting fresh conversations.

Smooth loading animations for AI typing and messages.

Technologies Used:

React – For building the frontend interface and managing component state.

Vite – For fast development, modern build tooling, and optimized production builds.

Context API – For managing the AI chat state across the app.

CSS Flexbox & Grid – For responsive layouts and interactive card designs.

APIs & Integrations:

Custom AI API – The app sends user prompts to a backend AI service (Gemini context) and receives structured responses.

Responses are sanitized to remove markdown formatting and are truncated for readability, ensuring clean and concise answers.

What it Does:
Users can type questions or click suggestion cards, and Sagittarius provides AI-generated answers. The chat interface automatically formats multi-line responses for readability, and the footer input area remains fixed at the bottom of the screen for easy access. It’s designed as a polished, recruiter-friendly project demonstrating frontend development, state management, and API integration skills.
