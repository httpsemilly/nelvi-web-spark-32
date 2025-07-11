import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = ({ isScrolled }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setDarkMode(!darkMode)}
      className={`w-9 h-9 p-0 transition-all duration-300 ${
        isScrolled 
          ? 'bg-muted hover:bg-muted/80 border border-border text-foreground hover:text-foreground' 
          : 'bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white hover:text-white'
      } dark:bg-gray-800/50 dark:hover:bg-gray-700/50 dark:border-gray-600/30`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;