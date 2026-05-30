export interface TaskItemProps {
    id: number,
    titulo: string,
    detalhes: string,
    status: string,
    time: string
}

export interface TaskProps {
    task: TaskItemProps[],
    time: string
}
