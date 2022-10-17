

import { useRouter } from "next/router"

export default function User(){

const router = useRouter();
const path = router.query
return(

    <h1>{path.user}</h1>
)



}