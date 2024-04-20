import Sidebar from './Header';

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{pageTitle}</h1>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
