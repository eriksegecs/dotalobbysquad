
export function Mmr() {
    
    return (
        <section id='mmr' className='mx-auto bg-[#1a1814]'>
            <div className='container mx-auto sm:px-4'>
                <div className='p-6 pb-10 text-4xl font-bold text-[#cda45e]'>
                    <p>Calculadora de MMR Médio</p>
                </div>
                <div className='p-6 pb-10'>
                    <label className='text-white text-lg' htmlFor='mmr-input'>Digite o seu MMR atual:</label>
                    <input type='number' id='mmr-input' className='m-2 border-2' />
                    <button id='mmr-button' className='bg-transparent hover:bg-yellow-300 text-white font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded'>Calcular</button>
                    <div id='chart'></div>
                    <ul id='selected-list'></ul>
                </div>
            </div>
        </section>
    )   
}