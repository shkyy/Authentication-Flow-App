# Authentication Flow - Next.js Mini App

A modern authentication flow implementation built with Next.js, TypeScript, Tailwind CSS, and Zustand.

## Features

- **Modern Authentication Flow**: Login interface with email/password validation
- **Protected Routes**: Dashboard access restricted to authenticated users
- **State Management**: Zustand for global state with localStorage persistence
- **Responsive Design**: Mobile-friendly interface based on Figma designs

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── dashboard/          # Protected dashboard route
│   │   ├── layout.tsx          # dashboard layout
│   │   └── page.tsx            # Dashboard page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home/login page
├── components/             # React components
│   ├── LoginPage.tsx       # Login page component
│   ├── Loading.tsx         # Loading component
├── store/                  # State management
│   └── authStore.ts        # Auth zustand store
├── types/                  # TypeScript type definitions
│   └── authTypes.ts        # Auth-related types
│   middleware/
│   └── authMiddleware.ts           # Server-side route protection
```

## Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd auth-flow
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Implementation Points

- **Server-side Protection**: Middleware intercepts requests to protected routes
- **Client-side Protection**: React components check authentication state
- **Persistent Login**: Session maintained through localStorage
- **Form Validation**: Email format and required field validation
- **Error Handling**: Clear user feedback for authentication failures
