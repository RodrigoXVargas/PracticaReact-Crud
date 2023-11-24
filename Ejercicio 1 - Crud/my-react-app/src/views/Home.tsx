import { useState, useEffect } from "react"
import { Category } from "../interfaces/Category"
import { getAll } from "../utils/api/apiCategory"
import { Costume } from "../interfaces/Costume"
import { getAllBy } from "../utils/api/apiCostume"



function Home() {
    const [categories, setCategories] = useState<Category[]>([])
    const [costumes, setCostumes] = useState<Costume[]>([])
    const [idSelectCategory, setIdSelectCategory] = useState<string>();
    const [idSelectCostume] = useState<string>();

    const getAllCategories = async () => {
        const datos: Category[] = await getAll()
        setCategories(datos)
    }

    const getCostumesByCategory = async (categoryName: string) => {
        const filtro = `category=${categoryName}`
        const datos: Costume[] = await getAllBy(filtro)
        setCostumes(datos)
    }

    const handleChange = (categoryName: string) => {
        if (categoryName !== "") {
            setIdSelectCategory(categoryName);
            getCostumesByCategory(categoryName)
        }
    }

    useEffect(() => {
        getAllCategories()
    }, [])


    return (
        <div className="selects">
            <div className="selectCategory">
                <select value={idSelectCategory} onChange={(e) => { handleChange(e.target.value) }}>
                    <option value='nada'>Seleccione una Categoria</option>
                    {categories.map((category: Category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>

            </div>
            <div className="selectCostume">
                <select value={idSelectCostume} onChange={(e) => { console.log(e.target.value) }}>
                    <option value='nada'>Seleccione una Disfraz</option>
                    {costumes.map((costume: Costume) => (
                        <option key={costume.id} value={costume.name}>{costume.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Home