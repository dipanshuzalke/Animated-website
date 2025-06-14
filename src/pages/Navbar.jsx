import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const menuOverlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuBackgroundRef = useRef(null);
  const closeButtonRef = useRef(null);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ];

  const languages = [
    { code: "EN", label: "English", active: true },
    { code: "ES", label: "Español", active: false },
    { code: "FR", label: "Français", active: false },
  ];

  // GSAP-style Animation Functions using vanilla JS
  const openMenu = () => {
    const overlay = menuOverlayRef.current;
    const background = menuBackgroundRef.current;
    const items = menuItemsRef.current;
    const closeBtn = closeButtonRef.current;

    if (!overlay || !background || !items.length) return;

    // Show overlay
    overlay.style.display = "flex";
    overlay.style.opacity = "0";

    // Reset initial states
    background.style.transform = "scale(0) rotate(45deg)";
    background.style.opacity = "0";

    items.forEach((item) => {
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateY(100px) rotate(10deg)";
      }
    });

    if (closeBtn) {
      closeBtn.style.opacity = "0";
      closeBtn.style.transform = "scale(0) rotate(180deg)";
    }

    // Animate overlay fade in
    setTimeout(() => {
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.opacity = "1";
    }, 10);

    // Animate background scale in with rotation
    setTimeout(() => {
      background.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
      background.style.transform = "scale(1) rotate(0deg)";
      background.style.opacity = "1";
    }, 100);

    // Animate close button
    setTimeout(() => {
      if (closeBtn) {
        closeBtn.style.transition = "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
        closeBtn.style.opacity = "1";
        closeBtn.style.transform = "scale(1) rotate(0deg)";
      }
    }, 400);

    // Animate items with stagger effect
    items.forEach((item, index) => {
      if (item) {
        setTimeout(() => {
          item.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
          item.style.opacity = "1";
          item.style.transform = "translateY(0) rotate(0deg)";
        }, 500 + index * 150); // 150ms stagger delay
      }
    });
  };

  const closeMenu = () => {
    const overlay = menuOverlayRef.current;
    const background = menuBackgroundRef.current;
    const items = menuItemsRef.current;
    const closeBtn = closeButtonRef.current;

    if (!overlay || !background || !items.length) return;

    // Animate close button out
    if (closeBtn) {
      closeBtn.style.transition = "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)";
      closeBtn.style.opacity = "0";
      closeBtn.style.transform = "scale(0) rotate(-180deg)";
    }

    // Animate items out (reverse order with different exit animation)
    items
      .slice()
      .reverse()
      .forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.style.transition = "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)";
            item.style.opacity = "0";
            item.style.transform = "translateX(-100px) rotate(-5deg)";
          }, index * 80);
        }
      });

    // Animate background out
    setTimeout(() => {
      background.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      background.style.transform = "scale(0.8) rotate(-45deg)";
      background.style.opacity = "0";
    }, items.length * 80 + 200);

    // Fade out overlay
    setTimeout(() => {
      overlay.style.transition = "opacity 0.4s ease";
      overlay.style.opacity = "0";
    }, items.length * 80 + 600);

    // Hide overlay completely
    setTimeout(() => {
      overlay.style.display = "none";
    }, items.length * 80 + 1000);
  };

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(openMenu, 10);
    } else {
      closeMenu();
      setTimeout(() => setIsMenuOpen(false), 800);
    }
  };

  const handleMenuItemClick = (href) => {
    closeMenu();
    setTimeout(() => {
      setIsMenuOpen(false);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 800);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangOpen && !event.target.closest(".language-dropdown")) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isLangOpen]);

  return (
    <>
      {/* Fixed Mobile Toggle Button - Only visible on mobile */}
      <button
        onClick={handleMenuToggle}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <Menu
            className={`w-6 h-6 absolute text-gray-800 transition-all duration-500 ${
              isMenuOpen
                ? "opacity-0 rotate-180 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            className={`w-6 h-6 absolute text-gray-800 transition-all duration-500 ${
              isMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-180 scale-0"
            }`}
          />
        </div>
      </button>

      {/* Desktop Navigation - Standard Horizontal Layout */}
      <nav className="hidden lg:block bg-white/95 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                BrandName
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="flex items-center space-x-10">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-400 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop Language Selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:bg-gray-50"
              >
                <span className="text-lg">EN</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setIsLangOpen(false)}
                      className={`block w-full text-left px-5 py-3 text-sm transition-all duration-200 hover:bg-gray-50 ${
                        lang.active
                          ? "text-indigo-600 font-semibold bg-indigo-50"
                          : "text-gray-700 hover:text-indigo-600"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {lang.label}
                        {lang.active && (
                          <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-between items-center justify-between">
        <h1 className="text-2xl font-semibold pl-[2rem] pt-[2rem]">BrandName</h1>
        {/* Mobile Full-Screen Menu Overlay */}
      <div
        ref={menuOverlayRef}
        className="lg:hidden fixed inset-0 z-40 hidden opacity-0"
      >
        {/* Animated Background */}
        <div
          ref={menuBackgroundRef}
          className="absolute inset-0 opacity-0"
          style={{
            background: "linear-gradient(#ffffff)",
            transform: "scale(0) rotate(45deg)",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-8">
          {/* Close Button */}
          {/* <button
            ref={closeButtonRef}
            onClick={handleMenuToggle}
            className="absolute top-8 right-8 p-4 text-white hover:text-indigo-300 transition-all duration-300 hover:bg-white/10 rounded-full opacity-0"
            style={{ transform: 'scale(0) rotate(180deg)' }}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button> */}

          {/* Brand Logo in Menu */}
          <div className="absolute top-8 left-8">
            <h1 className="text-2xl font-bold text-black">BrandName</h1>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col items-start space-y-8">
            {navigationItems.map((item, index) => (
              <div
                key={item.label}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className="opacity-0"
                style={{ transform: "translateY(100px) rotate(10deg)" }}
              >
                <button
                  onClick={() => handleMenuItemClick(item.href)}
                  className="text-4xl md:text-6xl font-light text-black hover:text-indigo-300 transition-all duration-500 hover:scale-110 tracking-wide relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-700 group-hover:w-full rounded-full"></span>
                </button>
              </div>
            ))}
          </div>
          </div>
      </div>
      </div>
    </>
  );
}
