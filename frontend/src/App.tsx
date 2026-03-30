import Home from "./pages/Home"
import { SidebarProvider } from "./components/ui/sidebar"

export function App() {
  return (
    <SidebarProvider>
      <Home />
    </SidebarProvider>
  )
}

export default App
