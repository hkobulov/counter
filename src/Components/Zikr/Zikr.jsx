import React from "react";
import './Zikr.scss'

function Zikr({modal, setModal}) {
    return (
        <>
            <div className={`area ${modal ? 'modal--open' : null}`}>
                <div className="area--inner">
                    <button className="area--inner__btn" onClick={() => setModal(false)}>X</button>
                    
                    <ul className="zikr-list">
                        <li className="zikr-list__item">
                            <span className="zikr-list__item-one">
                            أَسْتَغْفِرُ اللّٰهَ (Astag‘firulloh) -
                            </span>

                            <span className="zikr-list__item-two">
                            Allohdan mag‘firat qilishini so‘rayman.
                            </span>
                        </li>

                        <li className="zikr-list__item">
                            <span className="zikr-list__item-one">
                            أستغفر الله العظيم الذي لا إله إلا هو الحيَّ القيوم وأتوب إليه (Astag‘firullohallaziy laa ilaha illa huval Hayyul Qoyyum va atubu ilayh) -
                            </span>

                            <span className="zikr-list__item-two">
                            Hay (Tirik) va Qayyum (Abadiy) sifatli Zotdan o‘zga iloh yo‘q, Unga istig‘for aytaman va Unga tavba qilaman
                            </span>
                        </li>

                        <li className="zikr-list__item">
                            <span className="zikr-list__item-one">
                            سبحان الله (Subhanalloh) -
                            </span>

                            <span className="zikr-list__item-two">
                            Allohga hamd bo’lsin
                            </span>
                        </li>

                        <li className="zikr-list__item">
                            <span className="zikr-list__item-one">
                            أَسْتَغْفِرُ اللّٰهَ (Astag‘firulloh) -
                            </span>

                            <span className="zikr-list__item-two">
                            Allohga hamd bo’lsin
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Zikr;