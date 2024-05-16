const SuccessStoriesSection = () => {
    return (
        <section className="bg-gray-900 text-white py-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <img src="https://api.deepai.org/job-view-file/f36c54e6-6dc3-4609-8841-3df0b3a65fa9/outputs/output.jpg" alt="Success Story 1" className="rounded-full w-20 h-20 mx-auto mb-4" />
                        <p>“I started as a teenager on Funngroo and now I run my own successful business!”</p>
                    </div>
                    <div>
                        <img src="https://api.deepai.org/job-view-file/f790ea6a-1d73-4e97-aaf8-acb8bf225da0/outputs/output.jpg" alt="Success Story 2" className="rounded-full w-20 h-20 mx-auto mb-4" />
                        <p>“Funngroo gave me the confidence to pursue my passion and turn it into a career!”</p>
                    </div>
                    <div>
                        <img src="https://api.deepai.org/job-view-file/ffd2f4ac-9156-4256-9120-d36fe299b237/outputs/output.jpg" alt="Success Story 3" className="rounded-full w-20 h-20 mx-auto mb-4" />
                        <p>“Thanks to Funngroo, I learned valuable skills that helped me land my dream job!”</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SuccessStoriesSection;
