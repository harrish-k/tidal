import Image from 'next/image'
import Pattern from '../components/pattern'

export default function insurance() {
    return (
        <section className="text-gray-600 body-font">
            <div className=" p-4 bg-sky-50">
                <div className="border border-gray-200  rounded-lg  bg-white ">
                    <div className="container px-5 py-16 mx-auto">

                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <Pattern text="" />
                            <div className="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center mr-8">

                                <Image
                                    src="/encrypted.png"
                                    width='100'
                                    height='100'
                                />
                            </div>
                            <div className="row ">
                                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                                    Tidal Group Insurance Protection
                        </h1>
                                <h2 className="text-sm text-indigo-500 tracking-widest font-medium title-font mb-1">Upto $10,000 insurance coverage for every Order</h2>
                            </div>

                            <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Know More</button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}
