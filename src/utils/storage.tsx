const StorageKey = "todoData";
interface TodoDataItemInfo {
  content: string;
  isDone: boolean;
}
interface TodoDataInfo {
  [key: string]: TodoDataItemInfo[];
}

const saveData = (data: TodoDataInfo) => {
  localStorage.setItem(StorageKey, JSON.stringify(data));
};
const loadData = (): TodoDataInfo | [] => {
  const todoData = localStorage.getItem(StorageKey);
  return todoData ? JSON.parse(todoData) : [];
};
const addData = (date: string, todoData: TodoDataInfo, contents: string) => {
  if (!todoData[date]) {
    todoData[date] = [];
  }
  todoData[date].push({ content: contents, isDone: false });
  saveData(todoData);
};
const removeData = (date: string, todoData: TodoDataInfo, index: number) => {
  todoData[date].splice(index, 1);
  saveData(todoData);
};
export { saveData, loadData, addData, removeData };
