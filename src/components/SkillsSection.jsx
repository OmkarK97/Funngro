const SkillsSection = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Develop In-Demand Skills</h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className="flex justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/3940/3940056.png" alt="Graphic Design Icon" className="h-12 w-12 mx-4" />
                        <p>Graphic Design</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/4104/4104723.png" alt="Social Media Management Icon" className="h-12 w-12 mr-4" />
                        <p>Social Media Management</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://img.icons8.com/color/48/000000/video-editing.png" alt="Video Editing Icon" className="h-12 w-12 mr-4" />
                        <p>Video Editing</p>
                    </div>
                    {/* Add more skills here */}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
