export interface TaskItemProps {
    id: number,
    titulo: string,
    detalhes: string,
    status: string,
    time: string
}

export interface TaskProps {
    task: TaskItemProps[],
}

export interface TaskProp {
    task: TaskItemProps
    handlerTasksClick: (taskId: number) => void;
}

export const StatusTask = {
  Pendente: "pendente",
  Progresso: "progresso",
  Concluida: "concluida",
} as const;
