import { create } from 'zustand'

export interface BuilderComponent {
    id: string
    type: 'text' | 'image' | 'button' | 'section' | 'card'
    content: string
    styles: {
        fontSize?: string
        color?: string
        backgroundColor?: string
        padding?: string
        margin?: string
        textAlign?: 'left' | 'center' | 'right'
        width?: string
        height?: string
    }
    props?: {
        href?: string
        src?: string
        alt?: string
    }
}

interface BuilderState {
    components: BuilderComponent[]
    selectedComponent: string | null
    addComponent: (component: BuilderComponent) => void
    removeComponent: (id: string) => void
    updateComponent: (id: string, updates: Partial<BuilderComponent>) => void
    selectComponent: (id: string | null) => void
    reorderComponents: (startIndex: number, endIndex: number) => void
    clearAll: () => void
    loadComponents: (components: BuilderComponent[]) => void
}

export const useBuilderStore = create<BuilderState>((set) => ({
    components: [],
    selectedComponent: null,

    addComponent: (component) =>
        set((state) => ({
            components: [...state.components, component]
        })),

    removeComponent: (id) =>
        set((state) => ({
            components: state.components.filter((c) => c.id !== id),
            selectedComponent: state.selectedComponent === id ? null : state.selectedComponent
        })),

    updateComponent: (id, updates) =>
        set((state) => ({
            components: state.components.map((c) =>
                c.id === id ? { ...c, ...updates } : c
            )
        })),

    selectComponent: (id) =>
        set({ selectedComponent: id }),

    reorderComponents: (startIndex, endIndex) =>
        set((state) => {
            const result = Array.from(state.components)
            const [removed] = result.splice(startIndex, 1)
            result.splice(endIndex, 0, removed)
            return { components: result }
        }),

    clearAll: () =>
        set({ components: [], selectedComponent: null }),

    loadComponents: (components) =>
        set({ components, selectedComponent: null })
}))
