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

const CourseList = ({ courses, selectedTerm }: CourseListProps) => {
  const selectedCourses = Object.values(courses).filter(
    (course) => course.term === selectedTerm
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {selectedCourses.map((course) => (
        <div
          key={`${course.term}-${course.number}`}
          className="flex w-60 flex-col rounded-lg border border-gray-300 p-4 min-h-50 shadow-sm hover:shadow-md"
        >
          <h2 className="font-bold text-lg break-words">
            {course.term} CS {course.number}
          </h2>
          <p className="text-gray-600 break-words">{course.title}</p>
          <hr className="mt-auto border-gray-300" />
          <p className="mt-2 text-sm text-gray-500 break-words">{course.meets}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
