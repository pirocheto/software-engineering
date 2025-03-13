import { Callout } from "fumadocs-ui/components/callout"
import { MdRocketLaunch } from "react-icons/md"
import { ReactNode } from "react"

const CalloutExemple = ({ children }: { children: ReactNode }) => {
  return (
    <Callout
      type="info"
      title="Exemple"
      className="border-purple-600 border-2"
      icon={<MdRocketLaunch className="fill-purple-600" />}
    >
      {children}
    </Callout>
  )
}

export default CalloutExemple
