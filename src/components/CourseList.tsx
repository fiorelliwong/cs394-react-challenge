import CourseCard from './CourseCard';
import { useState } from 'react';

const toggleList = <T,>(x: T, lst: T[]): T[] => (
  lst.includes(x) ? lst.filter(y => y !== x) : [...lst, x]
);

interface CourseDetails {
  term: string;
  number: string;
  meets: string;
  title: string;
}

interface CourseListProps {
  courses: {
    [courseId: string]: CourseDetails;
  };
  selectedTerm: string;
}

const getCourseId = (course: CourseDetails) => `${course.term} CS ${course.number}`;

const CourseList = ({ courses, selectedTerm }: CourseListProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const termCourses = Object.values(courses).filter(
    (course) => course.term === selectedTerm
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {termCourses.map((course) => {
        const id = getCourseId(course);
        return (
          <CourseCard
            key={id}
            course={course}
            selected={selectedIds.includes(id)}
            onToggle={() => setSelectedIds((prev) => toggleList(id, prev))}
          />
        );
      })}
    </div>
  );
};

export default CourseList;
