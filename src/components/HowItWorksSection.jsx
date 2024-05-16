import step1 from '../assets/Step1.svg'
import step2 from '../assets/Step2.svg'
import step3 from '../assets/Step3.svg'
import step4 from '../assets/Step4.svg'

const HowItWorksSection = () => {
  return (
    <section className="pt-5 bg-gray-900 text-center">
      <h2 className="text-3xl text-white font-bold mb-6">How Funngroo Works</h2>
      <div className="flex flex-wrap justify-center bg-gray-900 text-white p-8">
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-gray-800 p-6 h-full rounded-full shadow-lg">
            <img src={step1} alt="Sign Up" className="mx-auto mb-4 w-14" />
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p>Create your profile.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-gray-800 p-6 rounded-full shadow-lg">
            <img src={step2} alt="Sign Up" className="mx-auto mb-4 w-14" />
            <h3 className="text-xl font-semibold mb-2">Explore Projects</h3>
            <p>Browse available freelance jobs.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-gray-800 p-6 rounded-full shadow-lg">
            <img src={step3} alt="Sign Up" className="mx-auto mb-4 w-14" />
            <h3 className="text-xl font-semibold mb-2">Submit Proposals</h3>
            <p>Apply for projects that interest you.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-gray-800 p-6 rounded-full shadow-lg">
            <img src={step4} alt="Sign Up" className="mx-auto mb-4 w-14" />
            <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
            <p>Complete projects and earn money.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;