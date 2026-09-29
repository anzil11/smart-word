import React from 'react';
import * as Icons from 'lucide-react';

export default function DynamicIcon({ name, className = "w-5 h-5", defaultIcon = "FileText" }) {
  const IconComponent = Icons[name] || Icons[defaultIcon] || Icons.FileText;
  return <IconComponent className={className} />;
}
