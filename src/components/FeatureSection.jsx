const FeatureSection = () => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose Funngroo?</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/2108/2108625.png" alt="Earn Money Icon" className="h-12 w-12 mr-4" />
                        <p>Earn Money: Freelance opportunities for teens.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/6171/6171939.png" alt="Develop Skills Icon" className="h-12 w-12 mr-4" />
                        <p>Develop Skills: Real-world experience.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/11943/11943761.png" alt="Flexible Work Icon" className="h-12 w-12 mr-4" />
                        <p>Flexible Work: Balance study and work.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/921/921356.png" alt="Community Support Icon" className="h-12 w-12 mr-4" />
                        <p>Community Support: Connect with peers and mentors.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
