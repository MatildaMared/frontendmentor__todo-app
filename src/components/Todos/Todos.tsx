import React from "react";
import styled from "styled-components";
import Todo from "../Todo/Todo";
import {
	selectFilteredTodos,
	reorderTodos,
} from "../../features/todos/todosSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Todos = () => {
	const todos = useAppSelector(selectFilteredTodos);
	const dispatch = useAppDispatch();

	const onDragEnd = (result: any) => {
		if (!result.destination) return;

		const newTodos = [...todos];
		const [reorderedTodo] = newTodos.splice(result.source.index, 1);
		newTodos.splice(result.destination.index, 0, reorderedTodo);

		dispatch(reorderTodos(newTodos));
	};

	return (
		<Wrapper>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="todos-container">
					{(provided) => (
						<TodosContainer
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{todos.length === 0 && (
								<NoTodos>Nothing left to do! 🥳</NoTodos>
							)}
							{todos.map((todo, index) => (
								<Draggable
									draggableId={todo.id}
									key={todo.id}
									isDragDisabled={false}
									index={index}
								>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<Todo
												todo={todo}
												isDragging={snapshot.isDragging}
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</TodosContainer>
					)}
				</Droppable>
			</DragDropContext>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	width: 100%;
	background-color: ${(props) => props.theme.todoBackground};
	border-radius: 5px 5px 0 0;
	box-shadow: ${(props) => props.theme.boxShadow};
`;

const TodosContainer = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const NoTodos = styled.li`
	text-align: center;
	padding: 1rem 20px 1rem;
	color: ${(props) => props.theme.placeholder};
`;

export default Todos;
