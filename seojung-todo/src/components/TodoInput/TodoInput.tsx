import * as s from "./TodoInputStyled";
import { useState } from "react";
import { Todos, Tags } from "../../interface";
import { color } from "../../assets/data";

interface TodoInputProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  tags: Tags[];
  setTags: React.Dispatch<React.SetStateAction<Tags[]>>;
}

const TodoInput: React.FC<TodoInputProps> = ({
  todos,
  setTodos,
  tags,
  setTags,
}) => {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("기본");
  const [tagInput, setTagInput] = useState("");

  const handleAddTodo = () => {
    if (!content.trim()) return alert("할 일을 입력해주세요!");
    if (!tag.trim()) return alert("태그를 입력해주세요!");

    const toDateType = date ? new Date(date) : null;

    const newTodo = {
      id: Date.now(),
      content,
      date: toDateType,
      isComplete: false,
    };

    const tagIndex = todos.findIndex((t) => t.tag === tag);

    let updatedTodos;

    if (tagIndex !== -1) {
      updatedTodos = todos.map((t, idx) =>
        idx === tagIndex
          ? {
              ...t,
              todos: [...t.todos, newTodo], // ✅ 새 배열 생성
            }
          : t
      );
    } else {
      updatedTodos = [...todos, { tag: tag || "기본", todos: [newTodo] }];
    }

    setTodos(updatedTodos); // ✅ 이제 React가 변경을 감지함
    setContent("");
    setDate("");
    setTag("기본");
  };

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * color.length);
    return color[index];
  };

  const handleAddTag = () => {
    const tagName = tagInput.trim();
    if (!tagName) {
      alert("태그 이름을 입력해주세요!");
      return;
    }
    const isDuplicate = tags.some((tag) => tag.name === tagName);
    if (isDuplicate) {
      alert("이미 존재하는 태그입니다.");
      return;
    }
    const newTag = {
      name: tagName,
      background: getRandomColor(),
    };

    const newTags = [...tags, newTag];
    const newTodos = [...todos, { tag: tagName, todos: [] }];

    setTags(newTags);
    setTodos(newTodos);
    setTagInput(""); // 입력창 초기화
  };

  return (
    <s.InputSection>
      <div>
        <s.TodoInput
          placeholder="할 일을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <s.TodoBtn onClick={handleAddTodo}>+</s.TodoBtn>
      </div>
      <s.DateInput
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <s.AddTag value={tag} onChange={(e) => setTag(e.target.value)}>
        {tags.map((tag) => (
          <option key={tag.name}>{tag.name}</option>
        ))}
      </s.AddTag>
      <div>
        <s.NewTagInput
          type="text"
          placeholder="새 태그 추가"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTag();
            }
          }}
        />
        <s.NewTagBtn onClick={handleAddTag}>+</s.NewTagBtn>
      </div>
    </s.InputSection>
  );
};

export default TodoInput;
