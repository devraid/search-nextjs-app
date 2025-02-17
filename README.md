# **Search Animals Next.Js App.**

## **Contents**

- [Key Design Decisions](#key-design-decisions)
- [Installing the project](#installing-the-project)

## **Project Description**

This project is a simple TEST engine search application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

**Key Technologies**

- **Next.js**: A React framework that offers **server-side rendering (SSR)** and **static site generation (SSG)** out of the box, helping with SEO and performance optimization.
- **TypeScript**: Adds static typing to JavaScript, improving code quality, reducing errors, and enabling better collaboration.
- **Tailwind CSS**: A utility-first CSS framework used to create responsive and maintainable designs.
- **ESLint**: A linting tool for ensuring clean, consistent, and error-free code.
- **Prettier**: An opinionated code formatter that automatically formats the code to maintain consistent style.
- **Webpack (under Next.js)**: Bundling and optimizing resources for production.

## **Key Design Decisions**

### **1\. Separation of Concerns and Modular Design**

The application follows the **separation of concerns** principle, ensuring each module has a single responsibility. This decision helps with scalability and maintainability, allowing each feature to evolve independently. The project is divided into layers:

- **API Layer**: Handles data fetching and caching logic. This layer is abstracted away from the UI, ensuring that components focus only on presentation.
- **UI Layer (Components)**: Components are reusable and self-contained. Each component has a clear, well-defined responsibility.
- **State Management**: The app uses React's useState for managing results state. This avoids unnecessary prop-drilling and makes state accessible across various components.

### **2\. SOLID Principles**

- **Single Responsibility Principle**: Each function or class has one reason to change. Components are focused on one task, and custom hooks handle data logic.
- **Open/Closed Principle**: Components and hooks are designed to be open for extension but closed for modification.
- **Liskov Substitution Principle**: Any subclass or derived component can be replaced with its parent class/component without affecting the correctness of the program.
- **Interface Segregation Principle**: Smaller, more focused interfaces are used for components and hooks to avoid unnecessary complexity.
- **Dependency Inversion Principle**: Components depend on abstractions (e.g., context) rather than concrete implementations.

### **3\. Component-Based Architecture**

The project is structured around a **component-based** approach:

- **Reusable Components**: Components are modular, designed to be reused across the application.
- **UI/UX**: Components are styled using **Tailwind CSS**, ensuring the UI is responsive and customizable without the need for heavy CSS. Only a global SCSS is used, where I added a custom browser scroll to make it look nicer. Of course, if we need custom SCSS that cannot be achieved using only tailwind, we can add modular files per component to scope the usage (e.g: header.module.scss could be used for the header.tsx component, again, just an example).

### **4\. Code Quality**

- **Clarity of Code**: The code is written with clarity in mind, following industry standards and best practices. Variable and function names are descriptive, and complex logic is encapsulated into functions or hooks.
- **Code Style**: **ESLint** and **Prettier** are configured to enforce code style consistency, minimizing issues in code readability and formatting. Please check the eslint configuration, it has many rules to make sure the team follow rules and we are on the same page, more can be added. For example, we can define if we want to use arrow functions, different naming conventions (e.g: Kebab, Snake, Pascal case…). We can even integrate JSDOC in conjunction with Eslint to enforce the use of certain elements, like author, description tags.

### **5\. Testing**

Testing is an integral part of the development process. **Jest** and **React Testing Library** are used for unit and integration tests. Tests are written to ensure the correctness of components. Another option widely extended is Vitest, which is pretty similar and maybe more efficient, but I prefer Jest for React.

### **6\. Caching and Performance**

The application utilizes **caching strategies** to minimize unnecessary API requests. By caching data for a limited period, we avoid fetching the same data repeatedly, improving performance and user experience.

### **7\. Responsive Design**

The UI is **responsive** from the ground up using **Tailwind CSS**. This ensures the app works seamlessly across various devices, from desktop to mobile.

### **8\. Production Build**

The project is optimized for production with **Webpack** (via Next.js), which handles asset bundling, concatenation, and minification. This ensures smaller bundle sizes and faster load times.

### **9\. Development Mode**

In **development mode**, assets are served without minification for faster debugging and easier readability. I also modified package.json so it executes Eslint to make sure everything is perfect in terms of format/rules.. When in **production mode**, assets are minified and optimized for performance.

### **10\. Custom Hooks**

Custom hooks are not used in this project, given the simplicity.

### **11\. TypeScript**

TypeScript is used throughout the application with **full type safety**, providing better tooling and preventing runtime errors. All components, hooks, and API calls are fully typed. Eslint rule in my case will not allow the use of “Any”.

### **12\. No Third-Party Component Libraries**

To demonstrate proficiency in **CSS** and component creation, no external component libraries (like Material UI, Ant Design, etc.) are used. All components are created **from scratch**.

### **13\. Version Control Best Practices**

The project follows **standard git practices** for commit messages, branch naming, and pull requests, like you see in the repo. The naming convention used is:

- **Feature Branches**: `feature/feature-name`
- **Bugfix Branches**: `bugfix/bug-description`
- **Commit Messages**: Clear and concise, following the format: `feat: add feature`, `fix: resolve bug`

### **14\. Code Linting and Formatting**

- **ESLint** is configured to catch potential issues and enforce a consistent coding style.
- **Prettier** is used for automatic code formatting, ensuring that the code is clean and consistent across the entire codebase.

### **15\. Requirements Compliance**

The application meets all functional requirements, including:

- No third-party component libraries.
- **React Context API** used for state management.
- The application is deployed and fully functional.

### **16\. Cache Strategy for Efficiency**

Cache is implemented for improved performance by storing data in the Context for 24 hours, reducing API calls.

### **17\. Deployment**

The app can be deployed on **Vercel** (or your preferred deployment platform), with a continuous integration and deployment pipeline for automatic builds and testing.

### **18\. Folder structure**

app/  
├── lib/api/ \# Server-side logic (data fetching, caching)  
├── components/ \# Reusable React components  
│ ├── common/ \# Common components  
│ ├── layout/ \# Layout components
│ └── search/ \# Search components  
├── fonts/ \# Fonts  
├── hooks/ \# Shared hooks (empty, for future needs)  
├── types/ \# TypeScript interfaces and types  
\_\_tests\_\_/ \# Jest tests  
public/ \# Static assets like images and icons  
.eslintrc.json \# ESLint configuration  
.prettierrc \# Prettier configuration  
tsconfig.json \# TypeScript configuration  
tailwind.config.ts \# Tailwind CSS configuration  
package.json \# Project dependencies and scripts  
jest.config.js \# Jest configuration
jest.setup.js \# Jest setup  
next.config.ts \# Next.js configuration

## **Installing the project**

### **_Prerequisites_**

Ensure you have the following installed on your machine:

- **Node.js** (v18 or later) \- [Download](https://nodejs.org/)
- **npm** (v8 or later) or **Yarn** for package management
- **Git** for cloning the repository

Download the project files and set up the application:

### Option 1: Clone the Repository

1. Clone the project:
   ```bash
   git clone https://github.com/devraid/search-nextjs-app.git
   cd search-nextjs-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Option 2: Download ZIP

1. Download the project as a ZIP file [here](https://github.com/devraid/search-nextjs-app/archive/refs/heads/main.zip).
2. Extract the ZIP and navigate to the project directory:
   ```bash
   cd search-nextjs-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Run the Application

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Building and Deploying to Vercel

### Build Locally

1. Build the app:
   ```bash
   npm run build
   ```
2. Run the production server:
   ```bash
   npm start
   ```

## Deploy to Vercel

1. [Download the Vercel CLI](https://vercel.com/download) or log in to the Vercel dashboard.
2. Run the following commands:
   ```bash
   npm install -g vercel
   vercel
   ```
   Follow the prompts to deploy your application.

Alternatively, visit the Vercel dashboard to link and deploy your repository.

**_Notes and Usage_**
Create a new branch for your feature or bug fix: git checkout \-b feature/\<branch-name\>
Remember to use npm install command line, to install dependencies, use --legacy-peer-deps if you have dependencies problems, never use --force  
Remember to use npm run dev for development and npm start for production

**_Make Your Changes_**

- Implement your feature or bug fix.
- Follow the project's coding standards.
- Ensure your changes don't break existing functionality by running tests

Run tests to validate your changes: npm test

Commit your changes using a descriptive message:  
git add . git commit \-m "Add feature/fix: \<description\>"  
git push origin feature/\<branch-name\>

### **_Create a Pull Request_**

- Go to the [repository](https://github.com/devraid/search-nextjs-app).
- Click **"Pull Requests"** and then **"New Pull Request"**.
- Select your fork and branch as the source and create the pull request.

**Thanks for reading this\!**
