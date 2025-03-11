import React from 'react';
import cn  from '../../lib/utils.js';

function Button({ children, className, asChild = false, variant = 'default', ...props }) {
  const Component = asChild ? React.Fragment : 'button';

  const variantStyles = {
    default: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50',
  };

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-200',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
