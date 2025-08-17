'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
  language: string;
}

const countries: Country[] = [
  { code: 'PT', name: 'Portugal', flag: '', language: 'Português' },
  { code: 'ES', name: 'España', flag: '', language: 'Español' },
  { code: 'BR', name: 'Brasil', flag: '', language: 'Português (BR)' },
  { code: 'US', name: 'United States', flag: '', language: 'English' },
  { code: 'FR', name: 'France', flag: '', language: 'Français' },
];

export default function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black hover:text-red-400 transition-all duration-300 relative group font-medium"
      >
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span>{selectedCountry.name}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-slate-700/50 py-2 z-50">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => handleCountrySelect(country)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-800/50 transition-colors text-left ${
                selectedCountry.code === country.code ? 'bg-slate-800/50 text-red-400' : 'text-slate-300'
              }`}
            >
              <div className="flex-1">
                <div className="font-medium">{country.name}</div>
                <div className="text-sm text-slate-400">{country.language}</div>
              </div>
              {selectedCountry.code === country.code && (
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}