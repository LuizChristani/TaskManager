export const Menu = {
    Home: "home",
    Task: "task",
} as const

export interface SidebarProps{
    sidebarOption: string
    isClickedOption: (option: string) => void
}
