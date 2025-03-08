# Vue 3 Personal Portfolio Website

This is a personal portfolio website built with Vue 3, showcasing a home section, projects section, and contact section. The website uses key Vue 3 features such as reactive state management, two-way data binding, dynamic list rendering, and conditional rendering.

## Features

- **Home Section**: Includes a toggle button to switch between welcome messages, a counter that increments with a button click, and a button to show/hide the counter value.
- **Projects Section**: Displays a list of projects and provides a toggle button to show the number of projects.
- **Contact Section**: Contains a contact form with fields for name, email, and message, using two-way data binding with `v-model`.
- **Persistent Data**: The form input data is stored in `localStorage` and persists even after page refresh.
- **Smooth Animations**: Sections have smooth fade-in animations when navigated.

## Project Structure

- `src/`
  - `components/`
    - `Home.vue`: Displays the home section, including the welcome message and counter.
    - `Projects.vue`: Displays the projects section with a list of projects and a project count.
    - `Contacts.vue`: Contains the contact form for user submissions.
  - `App.vue`: Main file that integrates the sections with smooth scrolling functionality.

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

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the website in your browser:
   ```bash
   http://localhost:5173/
   ```

## Usage

- **Toggle Home Message**: Click the "Toggle Message" button to switch between welcome messages.
- **Visitor Counter**: Click the "Visitor Counter" button to increment the counter.
- **Projects Section**: Click the "Toggle Message" button to display the number of projects.
- **Contact Form**: Fill out the contact form with name, email, and message, and click submit. The data is two-way bound and can be stored in local storage.

## Technologies Used

- Vue 3
- Vite
- CSS Animations

Thank you for visiting!