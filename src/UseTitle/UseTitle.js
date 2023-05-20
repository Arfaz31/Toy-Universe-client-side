import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Hero Toys - ${title} `;

    },[title])
}

export default useTitle;