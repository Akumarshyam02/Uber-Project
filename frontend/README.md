# UBER-VIDEO

## Overview

This project uses **React** with **Vite** to provide a minimal setup for development, including Hot Module Replacement (HMR) and some ESLint rules.

## Features

- **React + Vite**: A fast and modern development environment.
- **HMR**: Hot Module Replacement for efficient development.
- **ESLint**: Pre-configured linting rules for code quality.

## Plugins

Currently, two official plugins are available for React with Vite:

1. [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): Uses [Babel](https://babeljs.io/) for Fast Refresh.
2. [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

For production applications, we recommend:

- Using **TypeScript** with type-aware lint rules enabled.
- Referencing the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for guidance.
- Integrating [`typescript-eslint`](https://typescript-eslint.io) for enhanced linting.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the development server with `npm run dev` or `yarn dev`.

Enjoy building with **React** and **Vite**!



