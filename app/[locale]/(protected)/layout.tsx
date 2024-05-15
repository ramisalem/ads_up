interface ProtectedLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

const ProtectedLayout = ({ children, modal }: ProtectedLayoutProps) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-gray-100">
      <section>{children}</section>
      {/* {modal}

      <div id="modal-root" /> */}
    </div>
  );
};

export default ProtectedLayout;
