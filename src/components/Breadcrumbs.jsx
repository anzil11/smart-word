import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [], className = '' }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs font-medium text-slate-500 overflow-x-auto py-1 ${className}`}>
      <ol className="flex items-center space-x-1.5 flex-nowrap whitespace-nowrap">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-slate-400 hover:text-brand-600 transition-colors"
            title="Smart Word Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label || index} className="flex items-center space-x-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
              {isLast || !item.to ? (
                <span className="text-slate-800 font-semibold truncate max-w-[240px] sm:max-w-xs md:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-slate-500 hover:text-brand-600 transition-colors truncate max-w-[180px]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
