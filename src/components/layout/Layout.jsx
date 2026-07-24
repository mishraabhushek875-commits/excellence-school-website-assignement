import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      {/* Navbar will go here in Step 3 */}
      <header style={{ padding: '20px', background: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
        <h2>Header Placeholder</h2>
      </header>

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
