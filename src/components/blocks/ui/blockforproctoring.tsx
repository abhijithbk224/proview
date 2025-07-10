
import React from "react";

interface DataObject {
    icon: string;
    title: string;
}

interface Integration9Props {
    title?: string;
    data?: DataObject[]; 
}

const Integration9 = ({
    title,
    data = [],
}: Integration9Props) => {
    return (
        <section className="py-12 bg-[#F5FAFF]">
            <div className="mx-auto px-2 sm:px-4 lg:px-8 max-w-screen-xl">
                {title && (
                    <h2 className="mb-6 text-3xl font-semibold text-gray-800 text-center">
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-3 sm:pl-5 lg:pl-8">
                    {data.map(({ icon, title }, index) => (
                        <div
                            key={index}
                            className="flex w-full flex-col items-start rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md min-h-[230px]"
                        >
                            <img
                                src={icon}
                                alt={title}
                                className="mb-4 h-16 w-16 object-contain"
                            />
                            <div className="text-2xl font-semibold text-gray-800 pt-2 pl-1">
                                {title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Integration9 };
