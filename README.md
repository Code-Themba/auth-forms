# Auth-Forms

A lightweight React application providing login and registration forms with client-side validation and toast notifications.

---

## Features

- Login form with email and password inputs
- Registration form with username, email, password, and confirm password inputs
- Client-side validation displaying error messages via toasts
- Routing between `/login` and `/register` using React Router DOM
- Toast notifications powered by React Toastify
- Icons from React Icons (`FaUser`, `FaDoorOpen`)

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
auth-forms/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── custom-toast.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
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
