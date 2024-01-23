import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../service/service";

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {},
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
        console.log(JSON.stringify(categoria))
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {}
                })

                alert('Categoria Atualizado com sucesso!')
                retorno();

            } catch (error: any) {
                if (error.toString().includes('404')) {
                    alert('Categoria não encontrada!')
                } else {
                    alert('Erro ao atualizar a Categoria')
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {}
                });

                alert('Categoria cadastrado com sucesso')
            } catch (error: any) {
                if (error.toString().includes('404')) {
                    alert('Categoria não encontrada!')
                } else {
                    alert('Erro ao cadastrar a Categoria')
                }
            }
        }
    }

    function retorno() {
        navigate('/categorias')
    }

    return (
        <>
            <div className="container flex flex-col items-col items-center justify-center mx-auto">
                <h1 className="text-4xl text-center my-20">
                    {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar Categoria'}
                </h1>

                <form className="w-1/2 flex flex-col gap-6" onSubmit={gerarNovaCategoria}>
                    <div className="flex flex-col gap-2">
                        <label  htmlFor="tipo" className="text-2xl">tipo de tema</label>
                        <input type="text"
                            placeholder="Tipo"
                            name="tipo"
                            className="border-2 border-slate-700 rounded p-2"
                            value={categoria.tipo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <button className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block" type="submit">
                        {id === undefined ? 'Cadastrar' : 'Editar'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormularioCategoria;
