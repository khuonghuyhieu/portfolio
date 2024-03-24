import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function AppProviders({ children }) {
    return (
        <ThemeProvider>{ children }</ThemeProvider>
    )
}