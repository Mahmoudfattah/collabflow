import { CountInboxProvider } from "./hooks/useCountInbox";
import AppRouter from "./routes";


export default function App() {
  return<CountInboxProvider>

  <AppRouter />
  </CountInboxProvider>
}