import { TitlePage } from '@renderer/components/titlePage'
import svg from '@renderer/assets/construction-page.svg'

import './styles.css'

export function Frequency(): JSX.Element {
  return (
    <div className="Frequency">
      <TitlePage text="Frenquência" />

      <section className="Frequency__main">
        <img src={svg} className="Frequency__main-image" />
        <h2>Página em desenvolvimento</h2>
      </section>
    </div>
  )
}
