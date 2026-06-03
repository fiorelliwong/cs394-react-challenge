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
}

const CourseList = ({ courses }: CourseListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {Object.values(courses).map((course) => (
        <div
          key={course.number}
          className="w-60 rounded-lg border border-gray-300 p-4 shadow-sm hover:shadow-md"
        >
          <h2 className="font-bold text-lg">
            {course.term} CS {course.number}
          </h2>
          <p className="text-gray-600">{course.title}</p>
          <hr></hr>
          <p className="mt-2 text-sm text-gray-500">{course.meets}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
