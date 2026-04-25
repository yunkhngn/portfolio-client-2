export function Layout({ children }) {
  return (
    <div className="bg-background text-foreground selection:bg-brand selection:text-white pb-32 min-h-screen">
      {children}
    </div>
  )
}
