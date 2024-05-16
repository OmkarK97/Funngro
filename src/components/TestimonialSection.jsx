/* eslint-disable react/no-unescaped-entities */
const TestimonialSection = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Hear from Our Teenlancers</h2>
                <div className="flex justify-center items-center space-x-4">
                    <div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="Testimonial 1" className="rounded-full w-20 h-20 mx-auto mb-4" />
                        <p>“Funngroo helped me find freelance gigs that fit my schedule perfectly!”</p>
                    </div>
                    <div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="Testimonial 2" className="rounded-full w-20 h-20 mx-auto mb-4" />
                        <p>“I've learned so much and earned money doing what I love thanks to Funngroo!”</p>
                    </div>
                    <div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="Testimonial 3" className="rounded-full w-20 h-20 mx-auto mb-4" />
                        <p>“Being part of the Funngroo community has been an incredible experience!”</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
