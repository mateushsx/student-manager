import { TitlePage } from '@renderer/components/titlePage'
import svg from '@renderer/assets/construction-page.svg'

import './styles.css'

export function Classroom(): JSX.Element {
  return (
    <div className="Classroom">
      <TitlePage text="Aulas" />

      <section className="Classroom__main">
        <img src={svg} className="Classroom__main-image" />
        <h2>Página em desenvolvimento</h2>
      </section>
    </div>
  )
}
