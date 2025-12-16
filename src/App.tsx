import { FormProvider } from "./context/FormContext";
import MultiStepForm from "./MultiStepForm";

function App() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;
