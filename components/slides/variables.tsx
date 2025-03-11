import DynamicSlides from "components/dynamic/slides"
import { FaBox } from "react-icons/fa"
import { MdCategory } from "react-icons/md"
import { FaTag } from "react-icons/fa"
import { MdDiamond } from "react-icons/md"
import { BiRename } from "react-icons/bi"
import { HiOutlineIdentification } from "react-icons/hi2"

const Slides = () => {
  return (
    <DynamicSlides>
      <section>
        <h2>Les variables</h2>
      </section>
      <section>
        <div className="flex flex-col items-center gap-6 ">
          <p>Une variable est un conteneur</p>
          <FaBox />
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-6">
          <p>Elle est définie par</p>
        </div>
        <div className="flex flex-row items-center gap-34 justify-center">
          <div className="flex flex-row items-center gap-6">
            <BiRename /> <p>son nom</p>
          </div>
          <div className="flex flex-row items-center gap-6">
            <MdDiamond /> <p>sa valeur</p>
          </div>
          <div className="flex flex-row items-center gap-6">
            <MdCategory /> <p>son type</p>
          </div>
        </div>
      </section>
      <section>
        Elle est déclarée avec le signe `=`
        <pre>
          <code
            data-trim
            data-noescape
            className="language-python text-4xl text-center block"
          >
            {`
              age = 25
            `}
          </code>
        </pre>
      </section>
      <section>
        <p>Ses types basiques sont</p>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>int</td>
              <td>Entier</td>
              <td>25</td>
            </tr>
            <tr>
              <td>float</td>
              <td>Nombre à virgule</td>
              <td>25.0</td>
            </tr>
            <tr>
              <td>str</td>
              <td>Chaine de caractères</td>
              <td>"25"</td>
            </tr>
            <tr>
              <td>bool</td>
              <td>Booléen</td>
              <td>True</td>
            </tr>
          </tbody>
        </table>
      </section>
    </DynamicSlides>
  )
}

export default Slides
