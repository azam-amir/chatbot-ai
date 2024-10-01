import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./components/form";
import TextToSpeech from "./components/speech";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
}

export default App;
