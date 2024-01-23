import { useEffect, useState } from 'react';
import Categoria from '../../models/Categoria';
import CardCategorias from './CardCategorias'
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../service/service';
import { Dna } from 'react-loader-spinner';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategoria, {
        headers: {}
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Acesso Proibido')
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);
  return (
    <>
      {categoria.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='flex justify-center w-full my-4'>
        <div className='container flex flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {categoria.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategoria