import React from "react";
import './Zikr.scss';
import langData from '../../Localization/data';

function Zikr({modal, setModal, lang, theme}) {
    return (
        <>
            <div className={`area ${modal ? 'modal--open' : null}`} onClick={(evt) => evt.target.matches('.area') && setModal(false)}>
                <div className={`area--inner ${theme ? 'area--inner--dark' : null}`}>
                    <button className="area--inner__btn" onClick={() => setModal(false)}>X</button>
                    
                    <ul className="zikr-list">
                        <li className="zikr-list__item">
                            <span className={`zikr-list__item-one ${theme ? 'zikr-list__item-one--dark' : null}`}>
                            أَسْتَغْفِرُ اللّٰهَ (Astag‘firulloh) -
                            </span>

                            <span className={`zikr-list__item-two ${theme ? 'zikr-list__item-two--dark' : null}`}>
                            {langData[lang].zikr.istigfar}
                            </span>
                        </li>

                        <li className="zikr-list__item">
                        <span className={`zikr-list__item-one ${theme ? 'zikr-list__item-one--dark' : null}`}>
                            أستغفر الله العظيم الذي لا إله إلا هو الحيَّ القيوم وأتوب إليه (Astag‘firullohallaziy laa ilaha illa huval Hayyul Qoyyum va atubu ilayh) -
                            </span>

                            <span className={`zikr-list__item-two ${theme ? 'zikr-list__item-two--dark' : null}`}>
                            {langData[lang].zikr.istigfarFull}
                            </span>
                        </li>

                        <li className="zikr-list__item">
                        <span className={`zikr-list__item-one ${theme ? 'zikr-list__item-one--dark' : null}`}>
                            سبحان الله (Subhanalloh) -
                            </span>

                            <span className={`zikr-list__item-two ${theme ? 'zikr-list__item-two--dark' : null}`}>
                            {langData[lang].zikr.subhanalloh}
                            </span>
                        </li>

                        <li className="zikr-list__item">
                        <span className={`zikr-list__item-one ${theme ? 'zikr-list__item-one--dark' : null}`}>
                            أَسْتَغْفِرُ اللّٰهَ (Astag‘firulloh) -
                            </span>

                            <span className={`zikr-list__item-two ${theme ? 'zikr-list__item-two--dark' : null}`}>
                            {langData[lang].zikr.alhamdulillah}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Zikr;