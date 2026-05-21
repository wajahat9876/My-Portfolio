export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-black">{children}</div>;
}
