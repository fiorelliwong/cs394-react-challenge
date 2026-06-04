import Banner from './components/Banner'
import TermPage from './components/TermPage'
import { useJsonQuery } from './utilities/fetch';

interface CourseDetails {
  term: string;
  number: string;
  meets: string;
  title: string;
}

interface CourseOverview {
  title: string;
  courses: {
    [courseId: string]: CourseDetails;
  };
}

const App = () => {
  const [json, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!json) return <h1>No course data found</h1>;

  const schedule = json as CourseOverview;
  return (
    <main>
      <Banner title={schedule.title} />
      <TermPage courses={schedule.courses} />
    </main>
  );
};

export default App;