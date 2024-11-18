const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layout;
