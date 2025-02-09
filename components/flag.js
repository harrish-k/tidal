import Image from 'next/image'
export default function flag({flag, country, title}) {
    return (
        <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative">
                <Image
                    src={flag}
                    layout="fill"
                    className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{country}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </div>
        </div>
    )
}