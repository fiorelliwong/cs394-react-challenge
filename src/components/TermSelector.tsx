import type { Dispatch, SetStateAction } from 'react';

interface TermSelectorProps {
  terms: string[];
  selectedTerm: string;
  setSelectedTerm: Dispatch<SetStateAction<string>>;
}

const TermSelector = ({ terms, selectedTerm, setSelectedTerm }: TermSelectorProps) => (
  <div className="flex justify-center gap-2 p-4">
    {terms.map((term) => (
      <button
        key={term}
        onClick={() => setSelectedTerm(term)}
        className={`rounded border px-4 py-2 ${
          term === selectedTerm
            ? 'border-blue-600 bg-blue-600 text-white'
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        {term}
      </button>
    ))}
  </div>
);

export default TermSelector;
