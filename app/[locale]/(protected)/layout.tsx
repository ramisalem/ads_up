interface ProtectedLayoutProps {
    children: React.ReactNode;
}

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-[#f5f7fa]">
            {children}
        </div>
    );
};

export default ProtectedLayout;
