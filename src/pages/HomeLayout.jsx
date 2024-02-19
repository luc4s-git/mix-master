import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useNavigation } from 'react-router-dom';

export default function HomeLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === 'loading';
  const value = 'some value';

  return (
    <div>
      <Navbar />
      <section className="page">
        {loading ? (
          <div className="loading-position">
            <div className="loading"></div>
          </div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </div>
  );
}
