import React from 'react'
import ServicePage from './ServicePage'
import imageCard from "../Images/webcreativeImage.jpg";

export default function ServiceAll() {
  return (
    <div className='serviceAll'>
        <div className='serviceShow'>
            <div>
                <div className="serviceName">
                    <h1>Service</h1>
                    <p>
                        デジタル領域の課題に対して、システム開発、マーケティング、データ解析など一気通貫のデジタルコンサルティングサービスと、デジタルプロフェッショナルとプロジェクトをマッチングするプラットフォームを展開しています。
                    </p>
                </div>
            </div>
            <div className="gridCard">
                <ServicePage name="Web作成" pic={imageCard}/>
            </div>
            <div className="gridCard">
                <ServicePage name="システム開発"/>
            </div>
            <div className="gridCard">
                <ServicePage name="Web Marketing" />
            </div>
            <div className="gridCard">
                <ServicePage name="Webページ英語変換"/>
            </div>
            <div className='serviceButton'>
                <button className='buttonServiceElement'>View More</button>
            </div>
        </div>
    </div>
  )
}
