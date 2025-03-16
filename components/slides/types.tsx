import DynamicSlides from "components/dynamic/slides"
import { FaBox } from "react-icons/fa"
import { MdCategory } from "react-icons/md"
import { FaTag } from "react-icons/fa"
import { MdDiamond } from "react-icons/md"
import { BiRename } from "react-icons/bi"
import { HiOutlineIdentification } from "react-icons/hi2"
import { LuFingerprint } from "react-icons/lu"

const Slides = () => {
  return (
    <DynamicSlides>
      <section>
        <div className="flex flex-col items-center gap-6 ">
          <p>
            Un type définie la nature d'une valeur et les opérations qui lui
            sont applicables.
          </p>
          <LuFingerprint size={52} />
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Entier (<span className="text-fd-primary">int</span>)
          </p>
          <p className="text-4xl">
            Représente des nombres entiers, tels que des quantités, des
            identifiants ou des indices.
          </p>
          <p></p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              age = 25
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Flottant (<span className="text-fd-primary">float</span>)
          </p>
          <p className="text-4xl">
            Représente des nombres réels, tels que des mesures, des probabilités
            ou des taux.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              number = 3.14
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Booléen (<span className="text-fd-primary">bool</span>)
          </p>
          <p className="text-4xl">
            Représente une valeur de vérité, soit{" "}
            <span className="text-fd-primary">True</span> ou{" "}
            <span className="text-fd-primary">False</span>.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              is_adult = True
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Chaîne de caractères (<span className="text-fd-primary">str</span>)
          </p>
          <p className="text-4xl">
            Représente du texte peu importe sa longueur.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              name = "Alice"
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Nulle (<span className="text-fd-primary">None</span>)
          </p>
          <p className="text-4xl">
            Représente l'absence de valeur ou la non-existence.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              nothing = None
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Liste (<span className="text-fd-primary">list</span>)
          </p>
          <p className="text-4xl">
            Représente une collection ordonnée et modifiable d'éléments.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              fruits = ["pomme", "banane", "orange"]
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Tuple (<span className="text-fd-primary">tuple</span>)
          </p>
          <p className="text-4xl">
            Représente une collection ordonnée et non modifiable d'éléments.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              point = (3, 4)
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Ensemble (<span className="text-fd-primary">set</span>)
          </p>
          <p className="text-4xl">
            Représente une collection non ordonnée et sans doublons d'éléments.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              colors = {"red", "green", "blue"}
              `}
            </code>
          </pre>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <p>
            Dictionnaire (<span className="text-fd-primary">dict</span>)
          </p>
          <p className="text-4xl">
            Représente une collection d'éléments associés à des clés.
          </p>
          <pre>
            <code
              data-trim
              data-noescape
              className="language-python text-3xl text-center block"
            >
              {`
              person = {"name": "Alice", "age": 25}
              `}
            </code>
          </pre>
        </div>
      </section>
    </DynamicSlides>
  )
}

export default Slides
