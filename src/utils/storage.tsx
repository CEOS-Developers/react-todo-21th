const StorageKey = "todoData";
export interface TodoDataItemInfo {
  content: string;
  isDone: boolean;
}
export interface TodoDataInfo {
  [key: string]: TodoDataItemInfo[];
}

const saveData = (data: TodoDataInfo) => {
  localStorage.setItem(StorageKey, JSON.stringify(data));
};
const loadData = (): TodoDataInfo | {} => {
  const todoData = localStorage.getItem(StorageKey);
  return todoData ? JSON.parse(todoData) : {};
};
export { saveData, loadData };
