# Vue 3 Personal Portfolio

This personal portfolio website, built with Vue 3, showcases a home section, projects section, and contact form. The site utilizes key Vue 3 features like reactive state management with Pinia, dynamic list rendering, conditional rendering, and local storage persistence.

## Features

- **Home Section**: Includes a toggle button to switch between welcome messages and a counter with a button to increment its value.
- **Projects Section**: Displays a list of projects with an option to toggle the display of project count.
- **Contact Section**: A contact form for name, email, and message submissions with two-way data binding via `v-model`.
- **Persistent Data**: Stores form data, welcome messages, and project count in `localStorage`, ensuring persistence across page refreshes using Pinia and `pinia-plugin-persistedstate`.
- **State Management**: Uses Pinia for managing global state, including web info and project data.
- **Smooth Animations**: Sections fade in smoothly when navigated.
- **Vue Router**: Implements navigation between homepage and project page.
- **Props & Emit**: Uses props to pass data between parent and child components and emits for event handling.

## Project Structure

- `src/`
  - `components/`
    - `Header.vue`: Displays the home section with the welcome message and counter.
    - `Footer.vue`: Displays projects with a toggle for project count visibility.
  - `pages/`
    - `Home.vue`: Displays the home section with the welcome message and counter.
    - `Projects.vue`: Displays projects with a toggle for project count visibility.
    - `Contacts.vue`: Contact form with fields for name, email, and message.
  - `routers/`
    - `index.js`: Configures Vue Router for handling navigation.
  - `stores/`
    - `useWebInfo.js`: Pinia store managing web-related data like title and navigation links, persisted in local storage.
    - `useProjectInfo.js`: Pinia store for managing project-related data, also persisted in local storage.
  - `App.vue`: Integrates sections with smooth scrolling functionality.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ruhisawant/Personal-Porfolio.git
   cd personal-porfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the site in your browser:
   ```bash
   http://localhost:5173/
   ```

## Usage

- **Home Section**: Toggle between different welcome messages and increment the visitor counter.
- **Projects Section**: Toggle the display of the project count.
- **Contact Form**: Fill in your details and submit the form. The form data is saved and persists in local storage.
- **Navigation**: Use Vue Router to navigate between the homepage and project page.

## Technologies Used

- Vue 3
- Vite
- Pinia
- Vue Router
- CSS Animations

Thank you for visiting!