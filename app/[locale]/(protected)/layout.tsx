interface ProtectedLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

const ProtectedLayout = ({ children, modal }: ProtectedLayoutProps) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-[#F1F5F9]">
      <section>{children}</section>
      {/* {modal}

      <div id="modal-root" /> */}
    </div>
  );
};

export default ProtectedLayout;
