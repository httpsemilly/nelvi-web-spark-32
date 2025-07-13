import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  email: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const UserAvatar = ({ email, name, size = 'md', className = '' }: UserAvatarProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-16 w-16 text-lg'
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getGravatarUrl = (email: string, size: number = 200) => {
    const hash = email.toLowerCase().trim();
    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
  };

  return (
    <Avatar className={`${sizeClasses[size]} ${className} ring-2 ring-nelvi-purple/20 hover:ring-nelvi-purple/40 transition-all duration-200`}>
      <AvatarImage 
        src={getGravatarUrl(email)} 
        alt={name}
        className="object-cover"
      />
      <AvatarFallback className="bg-nelvi-gradient text-white font-medium">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;