import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer will go here in Step 7 */}
      <footer style={{ padding: '20px', background: '#333', color: 'white', textAlign: 'center', marginTop: 'auto' }}>
        <p>Footer Placeholder</p>
      </footer>
    </div>
  );
};

export default Layout;
