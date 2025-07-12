import { ArrowDown, CheckCircle, Users, Zap } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const Hero = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Task Management',
      description: 'Create, complete, and organize your tasks with ease'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Instant updates with local storage persistence'
    },
    {
      icon: Users,
      title: 'API Integration',
      description: 'Explore external data with search and pagination'
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center" id="home">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              React Task Manager
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A modern, responsive web application built with React, Tailwind CSS, and powerful state management
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('tasks')}
              className="text-lg px-8 py-3"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('api-data')}
              className="text-lg px-8 py-3"
            >
              Explore API Data
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('features')}
              className="animate-bounce"
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20" id="features">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with modern React patterns, hooks, and best practices for a seamless user experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-6xl mx-auto px-6 py-20" id="about">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built With Modern Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This application demonstrates proficiency in React ecosystem and modern web development practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React 18 with functional components</li>
                <li>• React Hooks (useState, useEffect, useContext)</li>
                <li>• Custom hooks for reusable logic</li>
                <li>• Tailwind CSS for responsive design</li>
                <li>• Lucide React for beautiful icons</li>
                <li>• Vite for fast development and building</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Features Implemented</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Component architecture with reusable UI</li>
                <li>• State management with Context API</li>
                <li>• Local storage persistence</li>
                <li>• API integration with error handling</li>
                <li>• Dark/Light theme switching</li>
                <li>• Responsive mobile-first design</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Hero

