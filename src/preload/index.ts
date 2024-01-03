import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { studentsHandlers } from '../constants'
import { TStudent } from '../interfaces'

// Custom APIs for renderer
const api = {
  createStudent: (student: TStudent): Promise<void> => {
    return ipcRenderer.invoke(studentsHandlers.create, student)
  },
  getAllStudents: (): Promise<TStudent[]> => {
    return ipcRenderer.invoke(studentsHandlers.getAll)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
