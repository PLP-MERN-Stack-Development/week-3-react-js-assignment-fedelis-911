# React Task Manager - Week 3 Assignment

A modern, responsive React application built with Vite, Tailwind CSS, and shadcn/ui components that demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Live Demo

The application is fully functional and includes all required features from the assignment specification.

## 📋 Features Implemented

### ✅ Task 1: Project Setup
- ✅ React application created using Vite
- ✅ Tailwind CSS installed and configured
- ✅ Project structure organized with components, pages, hooks, and context folders
- ✅ Responsive design implemented

### ✅ Task 2: Component Architecture
- ✅ **Button Component**: Multiple variants (primary, secondary, outline) with different sizes
- ✅ **Card Component**: Reusable card layout for content display
- ✅ **Navbar Component**: Responsive navigation with mobile menu and theme toggle
- ✅ **Footer Component**: Links, social icons, and copyright information
- ✅ **Layout Component**: Wrapper that includes Navbar and Footer
- ✅ All components use props for customization and reusability

### ✅ Task 3: State Management and Hooks
- ✅ **TaskManager Component** with full functionality:
  - ✅ Add new tasks
  - ✅ Mark tasks as completed with checkbox
  - ✅ Delete tasks with confirmation
  - ✅ Filter tasks (All, Active, Completed) with counters
  - ✅ Progress tracking with visual progress bar
- ✅ **React Hooks Implementation**:
  - ✅ `useState` for component state management
  - ✅ `useEffect` for side effects and data loading
  - ✅ `useContext` for theme management (light/dark mode)
  - ✅ Custom `useLocalStorage` hook for task persistence

### ✅ Task 4: API Integration
- ✅ **JSONPlaceholder API Integration**:
  - ✅ Fetch posts data with error handling
  - ✅ Loading states with spinner animation
  - ✅ Error states with user-friendly messages
  - ✅ Search functionality to filter posts by title/content
  - ✅ Pagination with page navigation controls
  - ✅ Responsive grid layout for post display

### ✅ Task 5: Styling with Tailwind CSS
- ✅ **Responsive Design**: Mobile-first approach, works on all screen sizes
- ✅ **Theme Switcher**: Light/dark mode with persistent preference
- ✅ **Tailwind Utilities**: Comprehensive use of spacing, typography, colors
- ✅ **Animations**: Smooth transitions, hover effects, and loading animations
- ✅ **Custom Components**: Built with shadcn/ui for professional appearance

## 🛠️ Technologies Used

### Frontend Stack
- **React 18** - Modern functional components with hooks
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons

### Key Libraries
- **React Hooks** - useState, useEffect, useContext, custom hooks
- **Context API** - Global state management for theme
- **Local Storage** - Data persistence for tasks and preferences
- **Fetch API** - HTTP requests for external data

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (Button, Card, Input, etc.)
│   ├── ApiData.jsx      # API data explorer with search and pagination
│   ├── Footer.jsx       # Footer with links and social icons
│   ├── Hero.jsx         # Landing page hero section
│   ├── Layout.jsx       # Main layout wrapper
│   ├── Navbar.jsx       # Navigation with theme toggle
│   └── TaskManager.jsx  # Task management functionality
├── context/
│   └── ThemeContext.jsx # Theme provider for light/dark mode
├── hooks/
│   └── useLocalStorage.js # Custom hook for localStorage
├── App.jsx              # Main application component
├── App.css              # Global styles and Tailwind imports
└── main.jsx             # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd week3-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
pnpm run build
```

## 🎯 Key Features Demonstration

### 1. Task Management
- **Add Tasks**: Type in the input field and click "Add" or press Enter
- **Complete Tasks**: Click the checkbox to mark tasks as done
- **Delete Tasks**: Click the trash icon to remove tasks
- **Filter Tasks**: Use "All", "Active", or "Completed" buttons
- **Progress Tracking**: Visual progress bar shows completion percentage
- **Persistence**: Tasks are saved to localStorage and persist between sessions

### 2. API Data Explorer
- **Real-time Search**: Filter posts by typing in the search box
- **Pagination**: Navigate through pages of results
- **Loading States**: Spinner animation while fetching data
- **Error Handling**: User-friendly error messages if API fails
- **Responsive Grid**: Adapts to different screen sizes

### 3. Theme System
- **Dark/Light Mode**: Toggle between themes with the moon/sun icon
- **Persistent Preference**: Theme choice is saved to localStorage
- **System Preference**: Defaults to user's system theme preference
- **Smooth Transitions**: Animated theme switching

### 4. Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adapts layout for medium screens
- **Desktop Enhanced**: Full features on large screens
- **Touch-Friendly**: Appropriate touch targets for mobile

## 🧪 Testing Checklist

- ✅ Application loads without errors
- ✅ Theme toggle works correctly
- ✅ Navigation links scroll to sections smoothly
- ✅ Tasks can be added, completed, and deleted
- ✅ Task filtering works with accurate counters
- ✅ Progress bar updates correctly
- ✅ Tasks persist after page refresh
- ✅ API data loads successfully
- ✅ Search functionality filters posts correctly
- ✅ Pagination navigates through results
- ✅ Responsive design works on different screen sizes
- ✅ Loading and error states display properly

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Single column layout, mobile menu
- **Tablet**: 768px - 1024px - Two column grid, condensed navigation
- **Desktop**: > 1024px - Three column grid, full navigation

## 🎨 Design System

### Colors
- **Light Theme**: Clean whites and grays with blue accents
- **Dark Theme**: Dark backgrounds with high contrast text
- **Semantic Colors**: Success (green), warning (yellow), error (red)

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body Text**: Readable font sizes with proper line height
- **Interactive Elements**: Clear visual feedback

### Components
- **Consistent Spacing**: 4px grid system
- **Rounded Corners**: Consistent border radius
- **Shadows**: Subtle elevation for cards and modals
- **Animations**: Smooth transitions and hover effects

## 🔧 Development Notes

### Custom Hooks
- **useLocalStorage**: Provides localStorage functionality with React state
- **useTheme**: Manages theme state and persistence

### Context Usage
- **ThemeContext**: Global theme state accessible throughout the app
- **Provider Pattern**: Clean separation of concerns

### API Integration
- **Error Boundaries**: Graceful error handling
- **Loading States**: User feedback during async operations
- **Data Transformation**: Clean data processing and display

## 📝 Assignment Requirements Met

All requirements from the Week 3 assignment have been successfully implemented:

1. ✅ **Project Setup**: Vite + React + Tailwind CSS
2. ✅ **Component Architecture**: Reusable UI components with props
3. ✅ **State Management**: React hooks + Context API + custom hooks
4. ✅ **API Integration**: JSONPlaceholder with search and pagination
5. ✅ **Responsive Styling**: Mobile-first Tailwind CSS implementation

## 🚀 Future Enhancements

Potential improvements for future versions:
- Task categories and tags
- Due dates and reminders
- Task priority levels
- Export/import functionality
- User authentication
- Real-time collaboration
- Advanced filtering options
- Drag and drop task reordering

## 📄 License

This project is created for educational purposes as part of a React.js assignment.

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**

