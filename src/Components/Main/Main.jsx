import React, { useEffect } from 'react'
import './main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import araraVermelha from '../../Assets/araraVermelha.jpg'
import araraCanga from '../../Assets/araraCanga.avif'
import araraCaninde from '../../Assets/araraCaninde.jpg'
import araraAzul from '../../Assets/araraAzul.jpg'
import araraLear from '../../Assets/araraLear.jpg'

const Main = () => {

  const tiposAraras = [
    {
        id: '1',
        nome: 'Arara-Vermelha-Grande',
        descricao: 'Mede cerca de 90 cm de comprimento e pesa 1,5 kg. Coloração vermelha. Face decorada por linhas delgadas de penas vermelhas. Colorida, especialmente pelo verde na parte média das asas que continua até a parte de trás. Asas com extremos azuis, base e ponta do rabo azul.',
        img: araraVermelha,
    },
    {
        id: '2',
        nome: 'Arara-Canga',
        descricao: 'A araracanga mede cerca de 81 e 96 cm de comprimento e pesa entre 1060 e 1123 gramas. Ela possui um bico grande, forte e curvo e patas zigodáctilas, ou seja, com dois dedos para frente e dois dedos para trás, o que lhes permite agarrar-se aos galhos das árvores com mais facilidade.' ,
        img: araraCanga
    },
    {
        id: '3',
        nome: 'Arara-Canindé',
        descricao: 'Mede cerca de 80 cm. Grande e de cauda longa. Coloração azul no dorso e amarelo-dourado na parte desde a face, ventre até o rabo, garganta com linha negra e área nua na cabeça com linha de penas negras. Os jovens têm as asas e o rabo marrom-acinzentado e os olhos pardos. Vivem em casais ou grupos de três indivíduos, mas podem formar grupos maiores, de até 30',
        img: araraCaninde
    },
    {
        id: '4',
        nome: 'Arara-Azul-Grande',
        descricao: 'É a maior espécie entre os psitacídeos (papagaios, periquitos, araras, maritacas), chegando a medir um metro da ponta do bico à ponta da cauda e pesando até 1,3 kg. São animais com hábitos que chamam a atenção. Elas gostam de voar em pares ou em grupo e nos fins de tarde, se reúnem em bandos em árvores “dormitório”.',
        img: araraAzul
    },
    {
        id: '5',
        nome: 'Arara-Azul-de-Lear',
        descricao: 'A arara-azul-de-lear é uma ave endêmica de uma região da Caatinga Nordeste da Bahia. É um pouco menor do que a arara-azul-grande e possui uma cauda longa e bico poderoso. A coloração do corpo alterna tons de azul esverdeado na cabeça e pescoço, desbotado na barriga, e cobalto na parte superior das asas e cauda.',
        img: araraLear
    }
  ];

  useEffect(() =>{
    AOS.init({duration: 800})
  })

  return (
    <div className='main'>
        <div className='info flex'>
            <h4 className='textoMedio textInfo' data-aos='fade-up'>
                As Araras são aves de porte grande, podendo atingir até 1 metro de comprimento. Elas possuem um bico forte e curvo, que é utilizado para quebrar nozes e sementes, sua principal fonte de alimentação. Além disso, também consomem frutas, flores e néctar.
            </h4>
        </div>
        <div className='tipo flex'>
            {
                tiposAraras.map((tipos) =>{
                    if(tipos.id == '2' || tipos.id == '4'){
                        return(
                            <div className='tiposArara'data-aos='fade-up'>
                                <div className='textoArara'>
                                    <h1 className='nomeArara'>{tipos.nome}</h1>
                                    <h4 className='descArara'>{tipos.descricao}</h4>
                                    <button className='btn'>Saiba mais</button>
                                </div>
                                <img src={tipos.img} alt={tipos.nome} className='mainImg'/>
                            </div>
                        )
                    }   
                    else{
                        return(
                            <div className='tiposArara' data-aos='fade-up'>
                                <img src={tipos.img} alt={tipos.nome} className='mainImg'/>
                                <div className='textoArara'>
                                    <h1 className='nomeArara'>{tipos.nome}</h1>
                                    <h4 className='descArara'>{tipos.descricao}</h4>
                                    <button className='btn'>Saiba mais</button>
                                </div>
                            </div>
                        )
                    }              
                })
            }
        </div>
    </div>
  )
}

export default Main