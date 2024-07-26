'use client'

import Image from 'next/image'
import { useTranslation } from "react-i18next"
import EmmisionsImg from "#/public/ui/emission.webp"

const Emissions = () => {
	const { t } = useTranslation('home')

    const sections = t('scaling-section.public-chains', { returnObjects: true });
    console.log(sections)
    const videoList = []
	return (
        <section className="bg-custom-gradient">
            <div className="flex flex-col items-center justify-center px-40 py-95">
                <div className="text-center text-white max-w-[600px] mb-40">
                    <h2 className="font-medium text-4xl mb-32 leading-tight tablet:text-xl">
                        {t('emissions-section.title-1')} <br/>
                        {t('emissions-section.title-2')}
                    </h2>
                    <p className="text-gray-100 text-2xl">
                        {t('emissions-section.desc.part-1')}
                        <span className="text-white">{t('emissions-section.desc.span')}</span>
                        {t('emissions-section.desc.part-2')}
                    </p>
                </div>
                <button className='text-white'>Button</button>
                <Image
                    src={EmmisionsImg}
                    width={1100}
                    alt=""
                    className=""
                />
            </div>
        </section>
		
	)
}

export default Emissions