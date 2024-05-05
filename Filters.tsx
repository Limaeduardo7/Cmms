import React from 'react';
import { FilterChangeEvent } from './types';

interface FiltersProps {
  onFilterChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="bg-white p-4 shadow">
      <form>
        <input
          type="date"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilterChange(e.target.value)}
          className="p-2 border rounded"
        />
        {/* Adicione mais inputs conforme necessário */}
      </form>
    </div>
  );
};

export default Filters;
