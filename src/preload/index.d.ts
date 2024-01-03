import { IApi } from 'src/interfaces'
import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: IApi
  }
}
