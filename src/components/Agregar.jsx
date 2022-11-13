const Agregar = ({ submit }) => {
    return (
        <section className="agregar_colaborador">
            <form onSubmit={(e) => submit(e)}>
                <h3>Agregar Colaborador</h3>
                <input type="text" placeholder="Nombre del colaborador" />
                <input type="text" placeholder="Correo del colaborador" />
                <button>Agregar Colaborador</button>
            </form>
        </section>
    )
}

export default Agregar