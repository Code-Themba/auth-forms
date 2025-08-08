# Auth-Forms

A lightweight React application providing login and registration forms with client-side validation and toast notifications.

---

## Features

- Toggle between **login** and **register** states with separate validation logic.
- Live-form validation with inline error messages.
- Toast-based error notifications for a sleek UX on validation failures.
- Social authentication buttons designed for future integration with OAuth providers.
- Clean, responsive styling with intuitive UX (icons, hover effects, etc.).

---

## Technologies

- React
- Vite
- React Router DOM
- React Toastify
- React Icons
- ESLint

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/auth-forms.git
cd auth-forms
npm install
```

---

## Usage

Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.  
Use the navigation links to switch between the login and registration forms.

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm install`     | Install project dependencies         |
| `npm run dev`     | Start Vite development server        |
| `npm run build`   | Build the app for production         |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint over the codebase         |

---

## Folder Structure

```
src/
├── components/
│   ├── AuthForm.jsx         # Main auth form (handles login/register toggle)
│   ├── AltAuthButtons.jsx   # Social auth buttons (Google, Facebook)
│   └── styles.css           # Styling for forms, buttons, toast UI, etc.
├── App.jsx                  # Root component and routing setup
├── index.jsx                # Application entry point
README.md                    # This file
package.json                 # Dependencies and scripts
vite.config.js              # Vite configuration
```

---

## Customization

- Modify validation logic in `LoginForm.jsx` and `RegisterForm.jsx` to suit your requirements.
- Tweak toast styles in `src/styles/custom-toast.css`.
- Expand routing in `App.jsx` to add protected or nested routes.
- Adjust Vite or ESLint settings in `vite.config.js` and `.eslintrc.js`.

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.
