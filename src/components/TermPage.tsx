import { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';

interface CourseDetails {
  term: string;
  number: string;
  meets: string;
  title: string;
}

interface TermPageProps {
  courses: {
    [courseId: string]: CourseDetails;
  };
}

const terms = ['Fall', 'Winter', 'Spring'];

const TermPage = ({ courses }: TermPageProps) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  return (
    <div>
      <TermSelector
        terms={terms}
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <CourseList courses={courses} selectedTerm={selectedTerm} />
    </div>
  );
};

export default TermPage;
