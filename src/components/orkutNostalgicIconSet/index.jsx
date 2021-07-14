import './orkutNostalgicIconSet.css'

function OrkutNostalgicIconSet(props) {

    let itens = [
        { name: 'Recados', slug: 'recados', icon: 'book' },
        { name: 'Fotos', slug: 'fotos', icon: 'camera' },
        { name: 'Videos', slug: 'videos', icon: 'video-camera' },
        { name: 'Fãs', slug: 'fas', icon: 'star' },
        { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
    ]

    let itens2 = [
        { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
        { name: 'Legal', slug: 'legal', icon: 'cool' },
        { name: 'Sexy', slug: 'sexy', icon: 'heart' },
    ]
    return (
        <ul className="orkutNostalgicIconSet">
            {
                itens.map(({name, slug, icon})=>{
                    
                    return (
                        <li key={`orkut__icon_set__${slug}`}>
                            <span style={{ gridArea: 'title' }} className="OrkutNostalgicIconSet__title">
                                {name}
                            </span>
                            <span className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
                            <img alt={slug} key={`orkut__icon_set__${slug}_img`} className="OrkutNostalgicIconSet__iconSample" src={`https://alurakut.vercel.app/icons/${icon}.svg`} />
                            {props[slug] ? props[slug] : 0}
                            </span>
                      </li>
                    
                    )
                    
                })
                }
                {
                    itens2.map(({name, slug, icon})=>{
                        const total = props[slug] ? props[slug] : 2;
                        return (
                            <li key={`orkut__icon_set__${slug}`}>
                                <span className="OrkutNostalgicIconSet__title">
                                    {name}
                                </span>
                                <span className="OrkutNostalgicIconSet__iconComplex OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
                                    {[0, 1, 2].map((_, index) => {
                                        const isHeartActive = index <= (total - 1);
                                        return <img key={`orkut__icon_set__${slug}_img_${index}`} alt={slug} src={`https://alurakut.vercel.app/icons/${icon}.svg`} style={{ marginRight: '2px', opacity: isHeartActive ? 1 : '0.5' }} />
                                    })}
                                </span>
                            </li>
                        )
                    })
                }

        </ul>
      
    );
  }
  
  export default OrkutNostalgicIconSet;