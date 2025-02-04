import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Chat } from '@/pages/chat';
import { Dashboard } from '@/pages/dashboard';
import { Button } from '@/components/ui/button';
import { Bot, BarChart } from 'lucide-react';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <div className="min-h-screen bg-background">
          <nav className="border-b">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center space-x-4">
                <Link to="/">
                  <Button variant="ghost" className="space-x-2">
                    <Bot className="h-5 w-5" />
                    <span>Chat</span>
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="ghost" className="space-x-2">
                    <BarChart className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;