import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ActiveProject {
    id: string; // matches Recommendation ID
    title: string;
    status: 'Planning' | 'In Progress' | 'Completed';
    nextStep: string;
    progress: number; // 0-100
    startDate: string;
}

interface ProjectState {
    projects: ActiveProject[];
    addProject: (project: ActiveProject) => void;
    updateProjectStatus: (id: string, status: ActiveProject['status']) => void;
    removeProject: (id: string) => void;
}

export const useProjectStore = create<ProjectState>()(
    persist(
        (set) => ({
            projects: [],
            addProject: (project) => set((state) => {
                // Prevent duplicates
                if (state.projects.find(p => p.id === project.id)) return state;
                return { projects: [...state.projects, project] };
            }),
            updateProjectStatus: (id, status) => set((state) => ({
                projects: state.projects.map((p) =>
                    p.id === id ? { ...p, status } : p
                ),
            })),
            removeProject: (id) => set((state) => ({
                projects: state.projects.filter((p) => p.id !== id),
            })),
        }),
        {
            name: 'malama-project-storage',
        }
    )
);
