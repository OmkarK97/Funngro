/* eslint-disable react/no-unescaped-entities */
const FAQSection = () => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-bold mb-4">How do I get started on Funngroo?</h3>
                        <p>Getting started on Funngroo is easy! Simply sign up for an account and create your profile. Once you're signed up, you can start exploring available freelance projects and submit proposals.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">How does Funngroo ensure the safety of its users?</h3>
                        <p>Funngroo takes the safety and security of its users seriously. We have strict guidelines in place to verify the identities of both freelancers and clients, and we provide support and resources to ensure a positive and safe experience for everyone.</p>
                    </div>
                    {/* Add more FAQs here */}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
