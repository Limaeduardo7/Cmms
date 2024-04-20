import React, { useState, ReactNode, FC } from 'react';

type DropdownMenuProps = {
  children: ReactNode;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

type DropdownMenuTriggerProps = DropdownMenuProps & {
  asChild?: boolean;
};

const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ({ children, asChild }) => {
  if (asChild) {
    return <>{children}</>; // Render children directly if asChild is true
  }
  return <div>{children}</div>; // Otherwise, wrap children in a div
};

type DropdownMenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
};

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({ children, onClick }) => (
  <div onClick={onClick} className="cursor-pointer hover:bg-gray-200">
    {children}
  </div>
);

const DropdownMenuContent: FC<DropdownMenuProps> = ({ children }) => (
  <div className="absolute bg-white shadow-lg mt-2 rounded-md p-2">
    {children}
  </div>
);

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent };
