const StorageKey = "todoData";
export interface TodoDataItemInfo {
  //할 일 데이터 타입
  content: string;
  isDone: boolean;
}
export interface TodoDataInfo {
  //날짜별 할 일 데이터 타입
  [key: string]: TodoDataItemInfo[];
}
//로컬 스토리지 저장
const saveData = (data: TodoDataInfo) => {
  localStorage.setItem(StorageKey, JSON.stringify(data));
};
//로컬 스토리지 불러오기
const loadData = (): TodoDataInfo | {} => {
  const todoData = localStorage.getItem(StorageKey);
  return todoData ? JSON.parse(todoData) : {};
};
export { saveData, loadData };
//유틸로 분리 시키기
