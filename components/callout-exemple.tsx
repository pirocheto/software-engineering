import { Callout } from "fumadocs-ui/components/callout"
import { MdRocketLaunch } from "react-icons/md"
import { ReactNode } from "react"

const CalloutExemple = ({ children }: { children: ReactNode }) => {
  const purple = "purple-600"

  return (
    <Callout
      type="info"
      title="Exemple"
      className={`border-${purple} border-1`}
      icon={<MdRocketLaunch className={`fill-${purple}`} />}
    >
      {children}
    </Callout>
  )
}

export default CalloutExemple
