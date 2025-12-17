export const useLocalStorage = () => {
  const savedData = localStorage.getItem("formData");
  return savedData ? JSON.parse(savedData) : null;
};

export const useGetCurrentPageFromLocalStorage = () => {
  const savedData = localStorage.getItem("currentPage");
  return savedData ? JSON.parse(savedData) : null;
};
