import { Main } from "@/components/hoc"
import { Screen404 } from "@/components/screens"
import { CustomLink } from "@/components/ui"
import { NextPage } from "next"
import s from "./screen404.module.scss"

const Page404: NextPage = () => {
  return (
    <Main className="notfound-main">
      <Screen404 />
    </Main>
  )
}

export default Page404
