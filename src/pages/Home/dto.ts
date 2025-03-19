export interface TodoDto {
	id: number;
	date: string; // 로컬스토리지 저장을 위해 사용
	isDone: boolean;
	content: string;
}
