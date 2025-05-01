
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Flame, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-spicy-red" />
          <span className="font-bold text-xl">Spicy Eden Kitchen</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-spicy-red transition-colors">Home</a>
          <a href="#featured" className="text-sm font-medium hover:text-spicy-red transition-colors">Featured</a>
          <a href="#levels" className="text-sm font-medium hover:text-spicy-red transition-colors">Heat Levels</a>
          <a href="#contact" className="text-sm font-medium hover:text-spicy-red transition-colors">Contact</a>
          <Button className="spicy-gradient text-white">Order Now</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-x-0 top-16 z-50 bg-white/95 backdrop-blur-md border-b md:hidden transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-screen" : "max-h-0"
      )}>
        <div className="container py-4 flex flex-col space-y-4">
          <a onClick={toggleMenu} href="#home" className="px-2 py-2 hover:bg-slate-100 rounded-md">Home</a>
          <a onClick={toggleMenu} href="#featured" className="px-2 py-2 hover:bg-slate-100 rounded-md">Featured</a>
          <a onClick={toggleMenu} href="#levels" className="px-2 py-2 hover:bg-slate-100 rounded-md">Heat Levels</a>
          <a onClick={toggleMenu} href="#contact" className="px-2 py-2 hover:bg-slate-100 rounded-md">Contact</a>
          <Button className="spicy-gradient text-white w-full">Order Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
