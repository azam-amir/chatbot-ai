import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./components/form";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
