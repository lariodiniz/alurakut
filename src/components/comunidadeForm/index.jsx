import './comunidadeForm.css'

function ComunidadeForm(props) {

    const handleCriaComunidade = (event) =>{
        event.preventDefault();
        let dadosDoForm = new FormData(event.target)

        let comunidade ={
            key: new Date().toISOString(),
            title: dadosDoForm.get("title"),
            image: dadosDoForm.get("image"),
            url: `/comun/${dadosDoForm.get("title")}`
        }

        let comunidades = [...props.comunidades, comunidade]
        props.setComunidades(comunidades)
    }

    return (
        <form onSubmit={handleCriaComunidade}>
            <div>
                <input 
                    placeholder="Qual vai ser o nome da sua comunidade?"
                    name="title"
                    area-label="Qual vai ser o nome da sua comunidade?"
                    type="text"
                />
            </div>
            <div>
                <input 
                    placeholder="Coloque uma URL para usarmos de capa"
                    name="image"
                    area-label="Coloque uma URL para usarmos de capa"
                />
            </div>
            <button>
                Criar comunidade
            </button>
        </form>
    );
  }
  
  export default ComunidadeForm;