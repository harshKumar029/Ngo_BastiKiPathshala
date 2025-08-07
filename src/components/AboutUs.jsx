import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">About Basti Ki Pathshala</h1>
        </div>
      </div>

      {/* We Work Together Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">We Work Together</h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          At <strong>Basti Ki Pathshala Foundation</strong>, collaboration is at the heart of everything we do. Under the banner of ‘We Work Together,’ we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities. Together, we strive towards a common goal: to empower every child with the opportunity to thrive. Through shared vision, shared values, and shared effort, we pave the way for a brighter, more inclusive future for all.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          At <strong>Basti Ki Pathshala Foundation</strong>, our mission is clear: to break the barriers of education in underserved communities. We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed. Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential. Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future. Our mission extends beyond the classroom as we work to bridge the educational gap and foster sustainable change in marginalized families. Together, we rewrite the narrative of education—one child at a time.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          <strong>Basti Ki Pathshala Foundation</strong> began with a simple yet powerful vision: to transform the lives of children living in slum areas through education. Founded under the Indian Societies Act of 1860, our journey started with a deep-seated belief in the potential of every child, regardless of their circumstances.
        </p>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mt-4">
          It all began when Sunita, inspired by personal experiences and driven by a passion for social justice, embarked on a mission to address the educational inequalities in underserved communities. Armed with determination and compassion, she brought together a team of like-minded individuals who shared her vision.
        </p>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mt-4">
          From humble beginnings, the foundation has grown into a beacon of hope. We have seen shy, uncertain children blossom into confident individuals, communities come together, and families empowered by education. Each milestone has deepened our resolve to continue.
        </p>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mt-4">
          As we reflect on our journey, we remain grateful for the unwavering support of our volunteers, donors, partners, and communities. Our story is still being written—filled with hope, resilience, and determination. With each chapter, we move closer to a world where every child has the opportunity to thrive.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange-100 py-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Journey</h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Whether you're a volunteer, donor, educator, or supporter—you are a vital part of our mission. Help us transform lives through education.
        </p>
        <a href="#contact" className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">Get Involved</a>
      </section>
    </div>
  );
};

export default AboutUs;
