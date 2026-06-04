interface CourseDetails {
  term: string;
  number: string;
  meets: string;
  title: string;
}

interface CourseCardProps {
  course: CourseDetails;
  selected: boolean;
  onToggle: () => void;
}

const CourseCard = ({ course, selected, onToggle }: CourseCardProps) => {
  return (
    <div
      onClick={onToggle}
      className={`flex w-60 flex-col rounded-lg border p-4 min-h-50 shadow-sm cursor-pointer hover:shadow-md ${
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
    >
      <h2 className="font-bold text-lg break-words">
        {course.term} CS {course.number}
      </h2>
      <p className="text-gray-600 break-words">{course.title}</p>
      <hr className="mt-auto border-gray-300" />
      <p className="mt-2 text-sm text-gray-500 break-words">{course.meets}</p>
    </div>
  );
};

export default CourseCard;
