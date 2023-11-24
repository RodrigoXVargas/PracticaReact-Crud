import { ChangeEvent, useEffect, useState } from "react"
import { Costume } from "../interfaces/Costume"
import { getOne, saveCostume } from "../utils/api/apiCostume"
import { useParams } from "react-router-dom"
import { Category } from "../interfaces/Category"
import { getAll } from "../utils/api/apiCategory"

interface FormData {
    id?: string,
    name: string,
    price: number,
    category: string,
    details: string,
    dischargeDate: string
}

function DetailsCostume() {
    const [categories, setCategories] = useState<Category[]>([])
    const [idSelectCategory] = useState('')

    const [formData, setFormData] = useState<FormData>({
        id: "0",
        name: "",
        price: 0,
        category: "",
        details: "",
        dischargeDate: ""
    });

    const { id } = useParams()

    const getAllCategories = async () => {
        const datos: Category[] = await getAll()
        setCategories(datos)
    }

    const getCostume = async () => {
        if (id === undefined || id === '0') {
            return
        }
        const costume: Costume = await getOne(id)
        console.log(costume.price)
        setFormData(costume)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const costumeSave: Costume = {
            id: formData.id ?? "",
            name: formData.name,
            price: formData.price,
            category: formData.category,
            details: formData.details,
            dischargeDate: formData.dischargeDate ?? ""
        }
        console.log(costumeSave.price)
        saveCostume(costumeSave)
            .then((response) => {
                console.log(response)
                if (response.error) {
                    e.preventDefault();
                    alert("Error en los datos: " + response.message)
                    return
                } else {
                    alert("Guardado ok")
                    window.location.href = 'http://localhost:5173/crud'
                }
            })
            .catch((error) => {
                alert("Error en el guardado")
                console.log(error.message)
            })
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        getCostume()
        getAllCategories()
    }, [])

    return (
        <>
            <section className="Details-Costume">
                <h1>Details Costume</h1>
                <form action="" className="form-details" onSubmit={handleSubmit}>
                    <label>Id</label>
                    <input type="text" name="id" value={formData.id} onChange={handleChange} disabled />
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                    <label>Category</label>
                    <select value={formData.category} name="category" onChange={ handleChange }>
                        <option value='nada'>Seleccione una Categoria</option>
                        {categories.map((category: Category) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>

                    <label>Details</label>
                    <input type="text" name="details" value={formData.details} onChange={handleChange} required />
                    <label>Discharge Date</label>
                    <input type="text" name="dischargeDate" value={formData.dischargeDate} onChange={handleChange} disabled />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default DetailsCostume